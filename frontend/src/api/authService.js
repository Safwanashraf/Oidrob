import axios from './axios';

export const logout = async () => {
    return await axios.post('/logout');
};

export const refreshToken = async () => {
    return await axios.get('/refresh');
};