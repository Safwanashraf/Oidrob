import axios from 'axios';

const API_URI = 'http://localhost:3000/api/auth';

// Login
export const login = async (email, password) => {
    const response = await axios.post(`${API_URI}/login`, {email, password});
    // localStorage.setItem('token', response.data.token);
    return response.data;
};

// Register
export const register = async (username, email, password) => {
    const response = await axios.post(`${API_URI}/register`, {username, email, password});
    // localStorage.setItem('token', response.data.token);
    return response.data;
};