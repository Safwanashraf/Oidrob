import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Dashboard from '../pages/Dashboard/Dashboard';

export const routes = () => {
  return (

      <Routes>
        <Route path='/' Component={Dashboard} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
      </Routes>

  )
}

export default routes;