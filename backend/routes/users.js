
const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const auth = require('../middleware/auth');

// @route   GET api/users/me
// @desc    Get current user profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const [users] = await pool.query(
      'SELECT user_id, email, full_name, profile_picture, created_at, last_login, is_premium FROM users WHERE user_id = ?',
      [req.user.id]
    );
    
    if (users.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(users[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/users/update-profile
// @desc    Update user profile
// @access  Private
router.put('/update-profile', auth, async (req, res) => {
  const { fullName, profilePicture } = req.body;

  try {
    await pool.query(
      'UPDATE users SET full_name = ?, profile_picture = ? WHERE user_id = ?',
      [fullName, profilePicture, req.user.id]
    );

    res.json({ msg: 'Profile updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
