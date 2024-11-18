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


// app.post('/register', (req, res) => {
//     // Registration logic here
//    res.status(200).send('User registered successfully');
// });
// app.post('/login', (req, res) => {
//     // Login logic here
//     res.status(200).send('User logged in successfully');
// })

// Connect to MongoDB

// mongoose.connect(process.env.MONGODB_URI)
// .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => {
//         console.log(`Server is running on ${PORT}`);
//     });
// })
// .catch((error) => {
//     console.error('MongoDB connection error:', error)
// })
