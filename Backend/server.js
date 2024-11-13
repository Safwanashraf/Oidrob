// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

// Initialize app
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

// Basic routes
app.get('/',(req, res)=>{
    res.send('Backend server is running');
});

// Connect to MongoDB
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
})
.catch((error) => {
    console.error('MongoDB connection error:', error)
})
