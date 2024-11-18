import rateLimit from 'express-rate-limit';

// Define rate limit options for login endpoint
const loginLimiter = rateLimit({
    // 15 minutes
    windowMs: 15 * 60 * 1000,
    // Limit each IP to 5 requests per windowMs
    max: 5,
    message: {
        message: 'Too many login attempts from this IP, please try again after 15 minutes.'
    }
});

export default loginLimiter;