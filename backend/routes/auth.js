
const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

// Create a Google OAuth client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// @route   POST api/auth/register
// @desc    Register a user
// @access  Public
router.post('/register', async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    // Check if user already exists
    const [existingUsers] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (existingUsers.length > 0) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create user ID
    const userId = 'user_' + Date.now();
    
    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    await pool.query(
      'INSERT INTO users (user_id, email, password, full_name, created_at) VALUES (?, ?, ?, ?, NOW())',
      [userId, email, hashedPassword, fullName]
    );

    // Create JWT
    const payload = {
      user: {
        id: userId
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const user = users[0];

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Update last login
    await pool.query('UPDATE users SET last_login = NOW() WHERE user_id = ?', [user.user_id]);

    // Create JWT
    const payload = {
      user: {
        id: user.user_id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/auth/google
// @desc    Authenticate with Google
// @access  Public
router.post('/google', async (req, res) => {
  const { credential } = req.body;

  try {
    // Verify the Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    
    // Extract user info from payload
    const { email, name, picture, sub: googleId } = payload;

    // Check if user exists
    const [existingUsers] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    
    let userId;

    if (existingUsers.length === 0) {
      // User doesn't exist - create a new one
      userId = 'google_user_' + Date.now();

      await pool.query(
        'INSERT INTO users (user_id, email, full_name, profile_picture, google_id, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
        [userId, email, name, picture, googleId]
      );
    } else {
      // User exists - update their Google ID if needed
      userId = existingUsers[0].user_id;
      
      if (!existingUsers[0].google_id) {
        await pool.query(
          'UPDATE users SET google_id = ?, profile_picture = ?, last_login = NOW() WHERE user_id = ?',
          [googleId, picture, userId]
        );
      } else {
        await pool.query('UPDATE users SET last_login = NOW() WHERE user_id = ?', [userId]);
      }
    }

    // Create JWT
    const jwtPayload = {
      user: {
        id: userId
      }
    };

    jwt.sign(
      jwtPayload,
      process.env.JWT_SECRET,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Google auth error:', err.message);
    res.status(500).json({ msg: 'Google authentication failed' });
  }
});

module.exports = router;
