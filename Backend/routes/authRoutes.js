const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

// Registeration Route

router.post('/register', registerUser);

module.exports = router;