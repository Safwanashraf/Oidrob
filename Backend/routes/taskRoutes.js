import express from 'express';
import authMiddleware from '../middleware/authMiddleware';
import router from express.Router();

// Routes
router.post('/task', authMiddleware);

module.exports = router;