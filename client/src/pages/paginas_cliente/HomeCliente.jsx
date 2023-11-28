import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderPages from "../../componentes/HeaderPages";

const HomeCliente = () => {
  return (
    <div className="w-screen h-screen pt-3 flex flex-col items-center border justify-items-center">
      <HeaderPages title={'Home Cliente'} route={'/home'}/>
      <div className="w-fit grid grid-cols-2 gap-3 mt-12">
        <Link to="/home/dadosConta"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Dados Contas
        </Link>
        <Link to="/home/transacoes"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Transações
        </Link>
        <Link to="/home/dadosCliente"
        className="no-underline flex items-center justify-center bg-zinc-800 w-40 h-40 rounded-xl font-bold text-white text-md hover:bg-zinc-600">
          Dados Cliente
        </Link>
      </div>
      <div className='w-screen flex justify-center items-start mt-5'>
        <Outlet/>
      </div>
    </div>
  );
};

export default HomeCliente;
