
const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const auth = require('../middleware/auth');

// @route   POST api/sessions/start
// @desc    Start a new session
// @access  Private
router.post('/start', auth, async (req, res) => {
  try {
    // Create session ID
    const sessionId = 'session_' + Date.now();
    
    // Check if user has premium status
    const [users] = await pool.query(
      'SELECT is_premium FROM users WHERE user_id = ?',
      [req.user.id]
    );
    
    if (users.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const isTrial = !users[0].is_premium;

    // Insert session
    await pool.query(
      'INSERT INTO user_sessions (session_id, user_id, start_time, is_trial) VALUES (?, ?, NOW(), ?)',
      [sessionId, req.user.id, isTrial]
    );

    res.json({ 
      sessionId, 
      startTime: new Date(), 
      isTrial 
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/sessions/end
// @desc    End a session
// @access  Private
router.put('/end/:sessionId', auth, async (req, res) => {
  const { sessionId } = req.params;

  try {
    // Get session start time
    const [sessions] = await pool.query(
      'SELECT start_time FROM user_sessions WHERE session_id = ? AND user_id = ?',
      [sessionId, req.user.id]
    );
    
    if (sessions.length === 0) {
      return res.status(404).json({ msg: 'Session not found' });
    }

    const startTime = new Date(sessions[0].start_time);
    const endTime = new Date();
    const durationInSeconds = Math.floor((endTime - startTime) / 1000);

    // Update session
    await pool.query(
      'UPDATE user_sessions SET end_time = NOW(), session_duration = ? WHERE session_id = ?',
      [durationInSeconds, sessionId]
    );

    res.json({ 
      sessionId, 
      endTime, 
      durationInSeconds 
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/sessions
// @desc    Get user sessions history
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const [sessions] = await pool.query(
      'SELECT * FROM user_sessions WHERE user_id = ? ORDER BY start_time DESC',
      [req.user.id]
    );
    
    res.json(sessions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/sessions/trial-time-remaining
// @desc    Get remaining trial time
// @access  Private
router.get('/trial-time-remaining', auth, async (req, res) => {
  try {
    // Get user premium status
    const [users] = await pool.query(
      'SELECT is_premium FROM users WHERE user_id = ?',
      [req.user.id]
    );
    
    if (users.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // If premium, no trial limitations
    if (users[0].is_premium) {
      return res.json({ 
        isPremium: true,
        remainingSeconds: null,
        message: "Premium user - unlimited access"
      });
    }

    // Calculate total used trial time
    const [result] = await pool.query(
      'SELECT SUM(session_duration) as total_time FROM user_sessions WHERE user_id = ? AND is_trial = TRUE',
      [req.user.id]
    );
    
    const totalUsedSeconds = result[0].total_time || 0;
    const totalTrialSeconds = 10 * 60; // 10 minutes in seconds
    const remainingSeconds = Math.max(0, totalTrialSeconds - totalUsedSeconds);

    res.json({
      isPremium: false,
      totalTrialSeconds,
      usedSeconds: totalUsedSeconds,
      remainingSeconds,
      percentageRemaining: (remainingSeconds / totalTrialSeconds) * 100
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
