import React from "react";
import { Outlet } from "react-router-dom";
// import HeaderPages from "../../componentes/HeaderPages";
import SideBarClient from "../../componentes/SideBarClient";
import { ClientProvider } from "../../context/ClientContext";

const HomeCliente = () => {

  return (
    <ClientProvider>
      <div className="w-screen h-screen flex flex-row border">
        <SideBarClient/>
        <div className='w-[84.5vw] h-screen ml-48 flex flex-col justify-start items-center'>
            <Outlet/>
        </div>
      </div>
    </ClientProvider>
  );
};

export default HomeCliente;
