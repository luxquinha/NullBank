import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando as páginas da aplicação:
// Páginas pais:
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SingIn'
import SignUp from './pages/SignUp'
import AdminPage from './pages/paginas_admin/AdminPage'
// Paginas filhos de ADMIN:
import Agency from './componentes/agency/Agency'
import Func from './componentes/employee/Func'
import Trans from './componentes/transacoes/Trans'
import Clientes from './componentes/clientes/Clientes'
import Contas from './componentes/contas/Contas'
import Dependente from './componentes/dependentes/Dependente'
import Telefones from './componentes/telefones/Telefones'
import Emails from './componentes/emails/Emails'
import ContaCliente from './componentes/conta_cliente/ContaCliente'
import ContaCorrente from './componentes/conta_corrente/ContaCorrente';
import ContaEspecial from './componentes/conta_especial/ContaEspecial';
import ContaPoupanca from './componentes/conta_poupanca/ContaPoupanca';

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
  },
  {
    path: '/func',
    element: <Func/>
  },
  {
    path: '/transacoes',
    element: <Trans/>
  },
  {
    path: '/clientes',
    element: <Clientes/>
  },
  {
    path: '/contas',
    element: <Contas/>
  },
  {
    path: '/dependentes',
    element: <Dependente/>
  },
  {
    path: '/telefones',
    element: <Telefones/>
  },
  {
    path: '/emails',
    element: <Emails/>
  },
  {
    path: '/conta_cliente',
    element: <ContaCliente/>
  },
  {
    path: '/conta_corrente',
    element: <ContaCorrente/>
  },
  {
    path: 'conta_especial',
    element: <ContaEspecial/>
  },
  {
    path: 'conta_poupanca',
    element: <ContaPoupanca/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes}/>
);

