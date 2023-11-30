import { createContext, useRef } from "react";
import axios from "axios";

export const ClientContext = createContext(null)

export const ClientProvider = ({children}) => {
// Fazer transações:
    
// Editar Perfil:

// Ver o extrato:
    const getTrasations = async() =>{
        try {
            const userStored = JSON.parse(localStorage.getItem('UserData'))
            const contaCli = userStored.conta
    
            // Obter todas as transações
            const resTransacao = await axios.get("http://localhost:8800/transacoes/");
            
            // Filtrar as transações com base na conta que o usuário logou
            const transacoesAssociadas = resTransacao.data.filter((transacao) =>
            transacao.conta_principal === contaCli)
            
        return transacoesAssociadas
        } catch (error) {
            alert(error);
        }
    }
    return(
        <ClientContext.Provider value={{getTrasations}}>
            {children}
        </ClientContext.Provider>
    )
}