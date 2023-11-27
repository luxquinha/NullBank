import React from "react";
import { Link } from "react-router-dom";

const HomeCliente = () => {
  return (
    <div className="container w-full h-full pt-3 flex flex-col items-center justify-items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Página do Administrador</h1>
      <div className="w-fit grid grid-cols-2 gap-3">
        <Link to="/dados_conta"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Dados Contas
        </Link>
        <Link to="/transacoes"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Transações
        </Link>
      </div>
    </div>
  );
};

export default HomeCliente;
