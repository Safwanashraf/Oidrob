const express = require('express');
const { registerUser } = require('../controllers/authController');
const { loginUser } = require('../controllers/authController');
const loginLimiter = require('../middleware/rateLimiter');
const { getUserProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginLimiter, loginUser);
router.get('/profile', authMiddleware, getUserProfile);
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: `Welcome ${req.user.role}`});
});

module.exports = router;