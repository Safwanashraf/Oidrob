import axios from './axios';

export const fetchTasks = async () => {
    return await axios.get('/tasks');
};

export const createTask = async (taskData) => {
    return await axios.post('/tasks', taskData);
};

export const updateTask = async (taskId, taskData) => {
    return await axios.put(`/tasks/${taskId}`, taskData);
};