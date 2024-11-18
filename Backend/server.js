import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allow credentials (if needed)
}));
app.use(express.json());
app.use('/api/auth', authRoutes);

// Basic routes
app.get('/',(req, res)=>{
    res.send('Backend server is running');
});
