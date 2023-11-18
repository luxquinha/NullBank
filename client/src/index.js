import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando as páginas da aplicação:
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SingIn'
import SignUp from './pages/SignUp'
import AdminPage from './pages/AdminPage'
import Agency from './pages/admin/Agency'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/signIn',
    element: <SignIn/>
  },
  {
    path: '/signUp',
    element: <SignUp/>
  },
  {
    path: '/admin',
    element: <AdminPage/>
  },
  {
    path: '/agency',
    element: <Agency/>
  }


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes}/>
);

