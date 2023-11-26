import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando as páginas da aplicação:
// Páginas pais:
import LandingPage from './pages/paginas_iniciais/LandingPage'
import SignIn from './pages/paginas_iniciais/SingIn'
import SignUp from './pages/paginas_iniciais/SignUp'
import AdminPage from './pages/paginas_admin/AdminPage'
import HomeFuncionario from './pages/paginas_func/HomeFuncionario'
import HomeCliente from './pages/paginas_cliente/HomeCliente'
import LoginFuncionario from './pages/paginas_func/LoginFuncionario';
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
import LoginAdmin from './pages/paginas_admin/LoginAdmin';

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
    path: '/signUp/:cpf',
    element: <SignUp/>
  },
  {
    path: '/admin',
    element: <AdminPage/>,
    // children=
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
  },
  {
    path: '/home',
    element: <HomeCliente/>,
    // children=
  },
  {
    path: '/funcionario',
    element: <HomeFuncionario/>,
    // children=
  },
  {
    path: '/loginFuncionario',
    element: <LoginFuncionario/>
  },
  {
    path: '/loginAdmin',
    element: <LoginAdmin/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes}/>
);

