import axios from 'axios';  

const axiosInstance = axios.create({  
    baseURL: 'http://localhost:4000/api/auth', // Adjust based on your backend URL  
    timeout: 10000, // Optional timeout  
    headers: {  
        'Content-Type': 'application/json',  
    },
});  

export default axiosInstance;