import React, { useContext, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { login as loginUser } from '../services/authService';


// Creating useState for email & password
const Login = () => {
    const { login } = useAuth(); // Access the login function from AuthContext
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {return alert('Please fill in all fields'); };

        // Handle login logic here
        try {
            const userData = await loginUser(email, password);
            console.log('Login success: ', userData);
            // Set user data in context
            login({ token: response.token, email });
        } catch (error) {
            console.error('Failed to login');
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md bg-white rounded-lg shadow-md p-6'>
                    <h2 className='text-2xl font-bold mb-4 text-gray-700 text-center'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-gray-600 text-sm mb-2' htmlFor='email'>Email</label>
                            <input
                            // id='email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            className='w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none 
                            focus:ring-2 focus:ring-blue-400'
                            required 
                            />
                        </div>
                        <div className='mb-6'>
                            <label className='block text-gray-600 text-sm mb-2' htmlFor='password'>Password</label>
                            <input 
                            // id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            className='w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none 
                            focus:ring-2 focus:ring-blue-400'
                            required
                            />
                        </div>
                        <button
                        type='submit'
                        className='w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600'
                        >
                            Login
                        </button>
                    </form>
            </div>
        </div>
    );
};
export default Login;