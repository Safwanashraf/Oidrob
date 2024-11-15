import React, { createContext, useState, useEffect, Children } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Set user details here if you have an endpoint to fetch user info
            setUser({ token });
        }
    },[]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token);
        navigate('/');
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { Children }
        </AuthContext.Provider>
    );
};