import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando as páginas da aplicação:
import LandingPage from './pages/paginas_iniciais/LandingPage'
import SignIn from './pages/paginas_iniciais/SingIn'
import SignUp from './pages/paginas_iniciais/SignUp'
import HomeCliente from './pages/paginas_cliente/HomeCliente'
import HomeAdmin from './pages/paginas_admin/HomeAdmin'
import HomeFuncionario from './pages/paginas_func/HomeFuncionario'

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
    path: '/home',
    element: <HomeCliente/>,
    // children=
  },
  {
    path: '/Admin',
    element: <HomeAdmin/>,
    // children=
  },
  {
    path: '/funcionario',
    element: <HomeFuncionario/>,
    // children=
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes}/>
);

