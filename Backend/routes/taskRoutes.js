const mongoose = require('mongoose');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Routes
router.post('/task', authMiddleware);

module.exports = router;