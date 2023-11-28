// Responsável por chamar o contexto:
import { useContext } from "react";
// Importando o contexto para criar um hook:
import { LoginContext } from "../context/loginContext";

// Hook para usar o contexto de login:
function useLoginContext(){
    const contextLogin = useContext(LoginContext)

    if(contextLogin === undefined){
        throw new Error('Esta fora de contexto');
    }
    return contextLogin
}

export default useLoginContext