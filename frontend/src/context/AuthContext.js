import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Set user details here if you have an endpoint to fetch user info
            setUser({ token });
        }
    },[]);

    const authenticate = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token);
        navigate('/')
    };
    
    const register = (userData) => authenticate(userData);
    const login = (userData) => authenticate(userData);
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            { children }
        </AuthContext.Provider>
    );
};