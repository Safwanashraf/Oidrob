import axios from 'axios';

const API_URI = 'http://localhost:4000/api/auth';

// Login
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URI}/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        throw new Error('Login failed');
    }
};

// Register
export const register = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URI}/register`, { username, email, password });
        return response.data;
    } catch (error) {
        console.error('Register error:', error.response ? error.response.data : error.message);
        throw new Error('Registration failed');
    }
};