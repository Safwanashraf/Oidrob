import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";

const routes = [
    {
        path: '/',
        element: <MainLayout />, // Wraps the component with the MainLayout
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'profile', element: <Profile /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <div>404 - Page Not Found</div> },
];

export default routes;