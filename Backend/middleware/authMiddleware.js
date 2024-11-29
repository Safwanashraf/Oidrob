import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    console.log("Extracted Token:", token);
    if (!token) {
        return res.status(401).json({ message: 'No token, Authorization denied' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Decoded Token:", decoded);  
        req.user = decoded;
        next();
    } catch(error) {
        console.error("Token verification error:", error);
        res.status(401).json({ message:'Token is not valid' });
    }
};
export default authMiddleware;

// Day nov 29 fake push
