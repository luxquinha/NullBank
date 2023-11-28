import React from "react";
import { Navigate } from "react-router-dom";
import useLoginContext from "../hooks/useLoginContext";
// Verifica se quem ta tentando acessar é um cliente, se não ele redireciona para a página anterior
export default function FuncRoutes({ children }){
    const { userType } = useLoginContext()

    return userType === 'func' ? (
        <div className="w-full h-full">
            {children}
        </div>
    ):(
        <Navigate to={'/'}/>
    )
}