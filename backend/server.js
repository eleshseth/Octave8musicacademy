// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:8080',
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ].filter(Boolean), // Remove any undefined values
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};
app.use(cors(corsOptions));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Create default admin user if it doesn't exist
    createDefaultAdmin();
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Function to create default admin user
const createDefaultAdmin = async () => {
  try {
    const User = require('./models/User');
    const adminExists = await User.findOne({ role: 'admin' });

    if (!adminExists) {
      const defaultAdmin = new User({
        name: 'Admin',
        email: 'admin@octave8.com',
        password: 'Admin123!',
        role: 'admin',
      });

      await defaultAdmin.save();
      console.log('Default admin user created:');
      console.log('Email: admin@octave8.com');
      console.log('Password: Admin123!');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Octave8 Music Academy Backend API is running!',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
    },
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
