import React from "react";
import { Navigate } from "react-router-dom";
import useLoginContext from "../hooks/useLoginContext";
// Verifica se quem ta tentando acessar é um admin, se não ele redireciona para a página anterior
export default function AdminRoutes({ children }){
    const { actualUserType } = useLoginContext()

    return actualUserType.current === 'dba' ? (
        <div className="w-full h-full">
            {children}
        </div>
    ):(
        <>
        {console.log(`Rota Home acionada ${actualUserType.current}`)}
        <Navigate to={'/'}/>
        </>
    )
}