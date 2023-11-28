import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginProvider } from './context/loginContext';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
// Importando as páginas da aplicação:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <RouterProvider router={routes}/>
    <React.StrictMode>
      <LoginProvider>
        <App/>
      </LoginProvider>
    </React.StrictMode>
);

