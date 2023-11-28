import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import useLoginContext from "../hooks/useLoginContext";
// Verifica se quem ta tentando acessar é um cliente, se não ele redireciona para a página anterior
export default function ClientRoutes({ children }){
    const { userType } = useLoginContext()
    // useEffect(()=>{
    //     setIsAdmin(JSON.parse(localStorage.getItem("isAdmin")))
    // },[])
// Está vazio enquanto a autenticação do cliente não é feita:
    return userType === 'cli' ? (
        <div className="w-full h-full">
            {children}
        </div>
    ):(
        <Navigate to={'/'}/>
    )
}