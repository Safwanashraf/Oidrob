import React from 'react';  
import { createRoot } from 'react-dom/client';  
import { BrowserRouter as Router } from 'react-router-dom';
// import { createBrowserRouter } from 'react-router-dom';
import App from './App';  
import { AuthProvider } from './context/AuthContext'; // Adjust the path as necessary  
import './input.css';


// Enable future flags for React Router
// const router = createBrowserRouter(routes, {
//  future: {
//    v7_startTransition: true,
//    v7_relativesplatpath: true,
//  },
// });

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