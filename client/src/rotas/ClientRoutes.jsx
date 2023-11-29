import React from "react";
import { Navigate } from "react-router-dom";
import useLoginContext from "../hooks/useLoginContext";
// Verifica se quem ta tentando acessar é um cliente, se não ele redireciona para a página anterior
export default function ClientRoutes({ children }){
    const { actualUserType } = useLoginContext()
    
    return actualUserType.current === 'cli' ? (
        <div className="w-full h-full">
            {children}
        </div>
    ):(
        <Navigate to={'/'}/>
    )
}