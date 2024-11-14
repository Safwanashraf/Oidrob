const mongoose = require('mongoose');

// Define Project Schema
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);