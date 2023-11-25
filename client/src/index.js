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
import Agency from './pages/agency/Agency'
import Func from './pages/employee/Func'
import Trans from './pages/transacoes/Trans'
import Clientes from './pages/clientes/Clientes'
import Contas from './pages/contas/Contas'
import Dependente from './pages/dependentes/Dependente'
import Telefones from './pages/telefones/Telefones'
import Emails from './pages/emails/Emails'
import Conta_cliente from './pages/conta_cliente/Conta_cliente'
import ContaCorrente from './pages/conta_corrente/ContaCorrente';
import ContaEspecial from './pages/conta_especial/ContaEspecial';
import ContaPoupanca from './pages/conta_poupanca/ContaPoupanca';

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
    element: <Conta_cliente/>
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

