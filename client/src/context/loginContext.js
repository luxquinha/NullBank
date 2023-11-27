import { createContext, useState } from "react";
import axios from "axios";

export const LoginContext = createContext(null)
// Esse contexto vai ter um estado com o tipo do usuário que envolve toda a aplicação
// Adiciona usuários ao banco, verificando se o cpf e rg ja são existentes, caso seja ele avisa
// Faz as requisições relacionadas a clientes
export const LoginProvider= ({children}) => {
    const adminUser = {
        user: 'Admin',
        password: '1234'
    }
    const [userType, setUserType] = useState('')

    const userLogOut = ()=>{
        setUserType('')
    }

    const autenticarTipoUsuario = (data, tipo)=>{
        if(tipo === 'dba'){
            if(isAdmin(data)){
                setUserType('dba')
                return true
            }else{
                return false
            }
        }
        else if(tipo === 'funcionario'){
            if(usuarioExistente(data, tipo)){
                setUserType('func')
                return true
            }else{
                return false
            }
        }
        else if(tipo === 'cliente'){
            if(usuarioExistente(data, tipo)){
                setUserType('cli')
                return true
            }else{
                return false
            }
        }
    }

    const isAdmin = (data)=>{
        return (data.key === adminUser.user && data.password === adminUser.password)
    }

    const usuarioExistente = async (data, tipo) => {
        const resposta = await axios.post("http://localhost:8800/login", {
            key: data.key,
            senha: data.password,
            tipo_usuario: tipo
        })
        if(resposta){
            localStorage.setItem("token", resposta.data.token)
            return true
        }else{
            // Mensagem de erro
            return false
        }
    }
    return(
        <LoginContext.Provider value={{autenticarTipoUsuario, userType, userLogOut}}>
            {children}
        </LoginContext.Provider>
    )
}