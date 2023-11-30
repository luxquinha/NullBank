// Responsável por chamar o contexto:
import { useContext } from "react";
// Importando o contexto para criar um hook:
import { ClientContext } from "../context/ClientContext";

// Hook para usar o contexto de login:
function useClientContext(){
    const contextClient = useContext(ClientContext)

    if(contextClient === undefined){
        throw new Error('Esta fora de contexto');
    }
    return contextClient
}

export default useClientContext