import express from 'express';
import authMiddleware from '../middleware/authMiddleware';
import router from express.Router();
// Routes
router.post('/project', authMiddleware);

module.exports = router;