import React from "react";
import { Outlet } from "react-router-dom";
import SideBarFunc from "../../componentes/SideBarFunc";

const HomeGerente = () => {
  return (
    <div className="w-screen h-screen pt-3 flex flex-row items-center border justify-items-center">
      <SideBarFunc/>
      <div className='w-[84.5vw] h-screen ml-48 flex flex-col justify-start items-center'>
        <Outlet/>
      </div>
    </div>
  );
};

export default HomeGerente;