import React from 'react';

const Sidebar = () => {
    return (
        <div className='w-64 h-screen bg-gray-800 text-white flex flex-col'>
            <div className='p-4 text-2xl font-bold'>Oidrob</div>
            <input
            type='text'
            placeholder='🔍 Search'
            className='mx-4 p-2 rounded bg-gray-700 focus:outline-none'
            />
            <div className='flex-grow mt-4 space-y-2 px-4'>
                <div className='font-bold text-gray-400'>My Work</div>
                <div className='space-y-1'>
                    <button className='w-full text-left hover:bg-gray-700 p-2 rounded'>Teams</button>
                    <button className='w-full text-left hover:bg-gray-700 p-2 rounded'>Projects</button>
                </div>
                <div className='mt-4'>
                    <button className='bg-blue-500 px-4 py-2 rounded text-white'>Invite People</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;