import { createContext, useState, useRef } from "react";
import axios from "axios";

export const LoginContext = createContext(null)
// Esse contexto vai ter um estado com o tipo do usuário que envolve toda a aplicação
// Adiciona usuários ao banco, verificando se o cpf e rg ja são existentes, caso seja ele avisa
// Faz as requisições relacionadas a clientes
export const LoginProvider= ({children}) => {
    const users = useRef([{}])
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
            console.log('Entrou na condicional de funcionário')
            if(usuarioExistente(data, tipo)){
                setUserType('func')
                return true
            }else{
                return false
            }
        }
        else if(tipo === 'cliente'){
            console.log('Entrou na condicional de cliente')
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
    // Aqui é onde fica a validação de usuários do tipo cliente e funcionário Davi:
    const usuarioExistente = async (data, tipo) => {
        const resposta = await axios.post("http://localhost:8800/validarLogin", {
            key: data.key,
            senha: data.password,
            tipo_usuario: tipo
        })
        if(resposta){
            localStorage.setItem("token", JSON.stringify(resposta.data.token))
            debugger
            return true
        }else{
            console.log(`O usuário: ${data?.key} | ${data?.password} | ${tipo} não existe!`);
            return false
        }
    }

    const existeCpf = async (cpf) =>{
        try{
            users.current = [{}]
            const response = await axios.get('http://localhost:8800/clientes')
            users.current = response.data.filter((cliente)=> cliente.cpf === cpf)
            return (users.current.length === 1)
        } catch(error){
            alert(error)
        }
    }
    return(
        <LoginContext.Provider value={{autenticarTipoUsuario, userType, userLogOut, existeCpf}}>
            {children}
        </LoginContext.Provider>
    )
}