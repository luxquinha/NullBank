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
        localStorage.removeItem('UserData')
    }

    const autenticarTipoUsuario = async (data, tipo)=>{
        if(tipo === 'dba'){
            if(isAdmin(data)){
                setUserType('dba')
                localStorage.setItem('UserData', JSON.stringify(data))
                return true
            }else{
                return false
            }
        }
        else if(tipo === 'funcionario'){
            usuarioExistente(data, tipo)
            .then((dados)=>{
                if(dados.success){
                    setUserType('func')
                    localStorage.setItem('UserData', JSON.stringify(data))
                    return true
                }
                else{
                    return false
                }
            })
        }
        else if(tipo === 'cliente'){
            usuarioExistente(data, tipo)
            .then((dados)=>{
                if(dados.success){
                    setUserType('cli')
                    localStorage.setItem('UserData', JSON.stringify(data))
                    return true
                }
                else{
                    return false
                }
            })
        }
    }

    // const senhasFunc = async()=>{
    //     try{
    //         const response = await axios.get('http://localhost:8800//matSenhas')
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    const isAdmin = (data)=>{
        return (data.key === adminUser.user && data.password === adminUser.password)
    }
    // Aqui é onde fica a validação de usuários do tipo cliente e funcionário Davi:
    const usuarioExistente = async (data, tipo) => {
        try{
            const resposta = await axios.post("http://localhost:8800/validarLogin", {
                key: data.key,
                senha: data.password,
                tipo_usuario: tipo
            })
            return resposta.data
        }catch(err){
            console.log(err);
        }
    }

    // Verifica se o CPF está cadastrado no BD:
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