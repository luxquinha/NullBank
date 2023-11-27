import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="container w-full h-full pt-3 flex flex-col items-center justify-items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Página do Administrador</h1>
      <div className="w-fit grid grid-cols-4 gap-3">
        <Link to="/agency"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Agências
        </Link>
        <Link to="/func"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Funcionários
        </Link>
        <Link to="/dependentes"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Dependentes
        </Link>
        <Link to="/clientes"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Clientes
        </Link>
        <Link to="/contas"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Contas
        </Link>
        <Link to="/transacoes"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Transações
        </Link>
        <Link to="/telefones"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Telefones - Clientes
        </Link>
        <Link to="/emails"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Emails - Clientes
        </Link>
        <Link to="/conta_cliente"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Contas - Cliente
        </Link>
        <Link to="/conta_corrente"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Conta Corrente
        </Link>
        <Link to="/conta_especial"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Conta Especial
        </Link>
        <Link to="/conta_poupanca"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Conta Poupança
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
