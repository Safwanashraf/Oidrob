import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a new user
export const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Check if the email or username already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const user = new User({
            username,
            email,
            password: hashedPassword,
            role
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Login a user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if the email and password are valid
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Login failed: user not found: ', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Login failed: Incorrect password for user: ', email);
            return res.status(400).json({ message: 'Invalid credentials'});
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        // Connect frontend to backend
        res.status(200).json({ token, message: 'Logged in successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get a user by ID
export const getUserProfile = async (req, res) => {
    try {
        // Retrieve user by ID from the JWT token payload
        const user = await User.findById(req.user.userId).select('-password');
        if(!user) {
            res.status(404).json({ message: 'User not found' });
        }
        // Connect frontend to backend
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


export const checkRole = (role) => (req, res, next) => {
    if(req.user.role !== role) {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};
