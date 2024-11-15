import React from 'react';  
import { createRoot } from 'react-dom/client';  
import { BrowserRouter as Router } from 'react-router-dom';  
import App from './App';  
import { AuthProvider } from './context/AuthContext'; // Adjust the path as necessary  

// Get the DOM element to use as the root for the React app  
const container = document.getElementById('root');  

// Create a root.  
const root = createRoot(container);  

// Render your app wrapped in Router and AuthProvider for context management  
root.render(  
  <React.StrictMode>  
    <Router>  
      <AuthProvider>  
        <App />  
      </AuthProvider>  
    </Router>  
  </React.StrictMode>  
);