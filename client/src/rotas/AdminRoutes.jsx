import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import useLoginContext from "../hooks/useLoginContext";
// Verifica se quem ta tentando acessar é um admin, se não ele redireciona para a página anterior
export default function AdminRoutes({ children }){
    const { userType } = useLoginContext()
    // useEffect(()=>{
    //     setIsAdmin(JSON.parse(localStorage.getItem("isAdmin")))
    // },[])

    return userType === 'dba' ? (
        <div className="w-full h-full">
            {children}
        </div>
    ):(
        <Navigate to={'/'}/>
    )
}