
const express = require('express');
const cors = require('cors');
const { testConnection } = require('./config/db');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const sessionsRoutes = require('./routes/sessions');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test database connection
testConnection();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionsRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('FeelCalm API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
