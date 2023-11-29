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
        password: 'Root'
    }
    const [userType, setUserType] = useState('')

    const userLogOut = ()=>{
        setUserType('')
        localStorage.removeItem('UserData')
    }

    const autenticarTipoUsuario = async (data, tipo)=>{
        const dataUser = {
            key: data.key,
            senha: data.password,
            tipoUser: tipo
        }
        if(tipo === 'dba'){
            if(isAdmin(data)){
                setUserType('dba')
                localStorage.setItem('UserData', JSON.stringify(dataUser))
                return true
            }else{
                return false
            }
        }
        else if(tipo === 'func'){
            usuarioExistente(data, tipo)
            .then((dados)=>{
                if(dados?.success){
                    usuarioCargo(data.key)
                    .then((cargo) =>{
                        if(cargo === 'gerente'){
                            setUserType('ger')
                            dataUser.tipoUser = 'ger'
                        }else if(cargo === 'caixa'){
                            setUserType('cai')
                            dataUser.tipoUser = 'cai'
                        }else if(cargo === 'atendente'){
                            setUserType('atd')
                            dataUser.tipoUser = 'atd'
                        }
                        localStorage.setItem('UserData', JSON.stringify(dataUser))
                    })
                    return true
                }
                else{
                    return false
                }
            })
        }
        else if(tipo === 'cli'){
            usuarioExistente(data, tipo)
            .then((dados)=>{
                if(dados?.success){
                    setUserType('cli')
                    localStorage.setItem('UserData', JSON.stringify(dataUser))
                    return true
                }
                else{
                    return false
                }
            })
        }
    }

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

    const usuarioCargo = async(key) =>{
        try{
            const resposta = await axios.get("http://localhost:8800/func/")
            let funcChoose = resposta.data.filter((funcionarios)=> funcionarios.mat === key)
            return funcChoose[0].cargo
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
        <LoginContext.Provider value={{autenticarTipoUsuario, userType, setUserType, userLogOut, existeCpf}}>
            {children}
        </LoginContext.Provider>
    )
}