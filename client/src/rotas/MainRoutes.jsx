import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import ClientRoutes from "./ClientRoutes";
import FuncRoutes from './FuncRoutes';
// Importando as páginas públicas:
import LandingPage from '../pages/paginas_iniciais/LandingPage'
import SignIn from '../pages/paginas_iniciais/SignIn'
import SignUp from '../pages/paginas_iniciais/SignUp'
// Importando as páginas do Admin:
import AdminPage from '../pages/paginas_admin/AdminPage'
import Agency from '../componentes/agency/Agency'
import Func from '../componentes/employee/Func'
import Trans from '../componentes/transacoes/Trans'
import Clientes from '../componentes/clientes/Clientes'
import Contas from '../componentes/contas/Contas'
import Dependente from '../componentes/dependentes/Dependente'
import Telefones from '../componentes/telefones/Telefones'
import Emails from '../componentes/emails/Emails'
import ContaCliente from '../componentes/conta_cliente/ContaCliente'
import ContaCorrente from '../componentes/conta_corrente/ContaCorrente';
import ContaEspecial from '../componentes/conta_especial/ContaEspecial';
import ContaPoupanca from '../componentes/conta_poupanca/ContaPoupanca';
// Importando páginas do Cliente:
import HomeCliente from '../pages/paginas_cliente/HomeCliente'
import DadosConta from '../pages/paginas_cliente/DadosConta'
import TransacoesConta from '../pages/paginas_cliente/TransacoesConta'
import DadosCliente from "../pages/paginas_cliente/DadosCliente";
import UmaContaForm from "../componentes/FormAcoes/UmaContaForm";
import DuasContasForm from '../componentes/FormAcoes/DuasContasForm'
// Importando páginas do Funcionário:
import HomeGerente from '../pages/paginas_func/HomeGerente'
import GerenteConta from "../pages/paginas_func/GerenteContas";
import DadosTransacoes from "../pages/paginas_cliente/TransacoesConta";
import AtendenteConta from "../pages/paginas_func/AtendenteContas";

export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Rotas iniciais - públicas */}
                <Route path="/" element={<LandingPage/>}/> 
                <Route path="/signIn" element={<SignIn/>}/> 
                <Route path="/signUp/:cpf" element={<SignUp/>}/> 
                {/* Rotas do Admin: */}
                <Route path="/admin" element={<AdminRoutes> <AdminPage/> </AdminRoutes>}>
                    <Route path="/admin/agency" element={<Agency/>}/> 
                    <Route path="/admin/func" element={<Func/>}/> 
                    <Route path="/admin/transacoes" element={<Trans/>}/> 
                    <Route path="/admin/clientes" element={<Clientes/>}/> 
                    <Route path="/admin/contas" element={<Contas/>}/> 
                    <Route path="/admin/dependentes" element={<Dependente/>}/> 
                    <Route path="/admin/telefones" element={<Telefones/>}/> 
                    <Route path="/admin/emails" element={<Emails/>}/> 
                    <Route path="/admin/conta_cliente" element={<ContaCliente/>}/> 
                    <Route path="/admin/conta_corrente" element={<ContaCorrente/>}/> 
                    <Route path="/admin/conta_especial" element={<ContaEspecial/>}/> 
                    <Route path="/admin/conta_poupanca" element={<ContaPoupanca/>}/> 
                </Route>
                {/* Rotas do Cliente: */}
                <Route path="/home" element={<ClientRoutes> <HomeCliente/> </ClientRoutes>}>
                    <Route path="/home/contas" element={<DadosConta/>}/>
                    <Route path="/home/perfil" element={<DadosCliente/>}/>
                    <Route path="/home/extrato" element={<TransacoesConta/>}/>
                    <Route path="/home/saque" element={<UmaContaForm/>}/>
                    <Route path="/home/deposito" element={<UmaContaForm/>}/>
                    <Route path="/home/pagamento" element={<DuasContasForm/>}/>
                    <Route path="/home/transferencia" element={<DuasContasForm/>}/>
                </Route>
                {/* Rotas dos Funcionários: */}
                <Route path="/gerente" element={<HomeGerente/>}></Route>
                <Route path="/gerente/contas" element={<GerenteConta/>}></Route>
                <Route path="/atendente" element={<AtendenteConta/>}></Route>
                

            </Routes>
        </BrowserRouter>
    )
}