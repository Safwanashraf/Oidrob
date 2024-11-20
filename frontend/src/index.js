import React from 'react';  
import { createRoot } from 'react-dom/client';  
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the path as necessary  
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter } from 'react-router-dom';

// Enable future flags for React Router
// const router = createBrowserRouter(routes, {
//  future: {
//    v7_startTransition: true,
//    v7_relativesplatpath: true,
//  },
// });

const container = document.getElementById('root');  
const root = createRoot(container); 

root.render(  
  <React.StrictMode>  
    <Router>  
      <AuthProvider>  
        <App />  
      </AuthProvider>  
    </Router>  
  </React.StrictMode>  
);

// Optional: Log results or send to an analytics endpoint  
reportWebVitals(console.log);  