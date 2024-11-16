import React from 'react'; 
// import App from './App'; 
import { createRoot } from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import routes from './routes'; // Import routes
import './input.css'; // Tailwind CSS

// Enable future flags for React Router
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativesplatpath: true,
  },
});

const container = document.getElementById('root'); 
const root = createRoot(container); 

root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
