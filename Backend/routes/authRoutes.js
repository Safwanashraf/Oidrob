import express from 'express';
import { registerUser } from '../controllers/authController.js';
import { loginUser } from '../controllers/authController.js';
import { getUserProfile } from '../controllers/authController.js';
import loginLimiter from '../middleware/rateLimiter.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginLimiter, loginUser);
router.get('/profile', authMiddleware, getUserProfile);

export default router;