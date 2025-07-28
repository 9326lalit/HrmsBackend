import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a new user
export const registerUser = async (req, res) => {
  const { fullname, email, password, role } = req.body;
  
  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create a new user
    const newUser = new User({
      fullname,
      email,
      password,
      role
    });

    // Save user to the database
    const savedUser = await newUser.save();
    
    // Generate JWT token
    const token = jwt.sign({ userId: savedUser._id, role: savedUser.role }, process.env.JWT_SECRET, {
      expiresIn: '2h' // Token expiration set to 2 hours
    });

    res.status(201).json({
      message: 'User registered successfully',
      token
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '2h' // Token expiration set to 2 hours
    });

    res.json({
      message: 'Login successful',
      token
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
