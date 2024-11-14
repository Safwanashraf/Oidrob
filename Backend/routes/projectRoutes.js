const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Routes
router.post('/project', authMiddleware);

module.exports = router;