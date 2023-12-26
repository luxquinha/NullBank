import React from "react";
import { Navigate } from "react-router-dom";
import useLoginContext from "../hooks/useLoginContext";
import { ClientProvider } from "../context/ClientContext";
// Verifica se quem ta tentando acessar é um cliente, se não ele redireciona para a página anterior
export default function ClientRoutes({ children }){
    const { actualUserType } = useLoginContext()
    
    return actualUserType.current === 'cli' ? (
        <div className="w-full h-full">
            <ClientProvider>
                {children}
            </ClientProvider>
        </div>
    ):(
        <Navigate to={'/'}/>
    )
}
