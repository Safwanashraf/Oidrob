import axios from './axios';

export const login = async (email, password) => {
    return await axios.post('/login', { email, password });
};

export const register = async (username, email, password) => {
    return await axios.post('/register', { username, email, password });
};

export const getUserProfile = async (userId) => {
    return await axios.get(`/${userId}`);
};