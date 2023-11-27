import React from "react";
import { Outlet } from "react-router-dom";
import SideBarAdmin from "../../componentes/SideBarAdmin";
import HeaderPages from "../../componentes/HeaderPages";

function AdminPage(){
  return (
    <div className='w-screen h-screen flex flex-col'>
      <HeaderPages title={'Administrador'} route={'/admin'}/>
      <div className='w-screen flex flex-row gap-x-1'>
        <div className='w-[14vw] relative flex justify-center'>
          <SideBarAdmin/>
        </div>
        <div className='w-[85vw] flex justify-center items-start mt-5'>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
