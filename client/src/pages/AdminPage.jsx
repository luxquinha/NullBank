import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Página do Administrador</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/agency">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Agências
          </button>
        </Link>
        <Link to="/func">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green active:bg-green-800">
            Funcionários
          </button>
        </Link>
        <Link to="/clientes">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800">
            Clientes
          </button>
        </Link>
        <Link to="/contas">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800">
            Contas
          </button>
        </Link>
        <Link to="/transacoes">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red active:bg-red-800">
            Transações
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
