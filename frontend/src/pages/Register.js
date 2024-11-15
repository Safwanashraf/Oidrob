import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md bg-white rounder-lg shadow-md p-6'>
                <h2 className='text-2xl font-bold mb-4 text-gray-700 text-center'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-600 text-sm mb-2' htmlFor='username'>Username</label>
                        <input 
                        id='username'
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none 
                        focus:ring-2 focus:ring-blue-400'
                        required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-600 text-sm mb-2' htmlFor='email'>Email</label>
                        <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none 
                        focus:ring-2 focus:ring-blue-400'
                        required
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm mb-2' htmlFor='password'>Password</label>
                        <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none 
                        focus:ring-2 focus:ring-blue-400'
                        required
                        />
                    </div>
                    <button 
                    type='submit'
                    className='w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600'
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;