import { createContext, useRef } from "react";
import axios from "axios";

export const LoginContext = createContext(null)
// Esse contexto vai ter um estado com o tipo do usuário que envolve toda a aplicação
// Adiciona usuários ao banco, verificando se o cpf e rg ja são existentes, caso seja ele avisa
// Faz as requisições relacionadas ao login clientes
export const LoginProvider= ({children}) => {
// ==============================================LÓGICA PARA LOGIN DE USUÁRIOS===========================================================
    // Dados estático de Admin:
    const adminUser = {
        user: 'Admin',
        password: 'Root'
    }
    const tipoTrans = useRef('')
    const cliente = useRef()
    const users = useRef([{}])
    const actualUserType = useRef('')
    // Limpar o tipo do usuário e o localStorage:
    const userLogOut = ()=>{
        actualUserType.current = ''
        localStorage.removeItem('UserData')
    }
    // Recebe o tipo de usuário e verifica se seus dados de login estão válidos
    const autenticarTipoUsuario = async(data, tipo)=>{
        // Objeto que será salvo no localStorage:
        let dataUser = {
            key: data.key,
            senha: data.password,
            tipoUser: tipo,
            conta: ''
        }
        if(tipo === 'dba'){
            // Verificar se os dados são válidos
            if(isAdmin(data)){
                // Atualiza o tipo e salva no localStorage:
                actualUserType.current = tipo
                localStorage.setItem('UserData', JSON.stringify(dataUser))
                return true
            }else{
                return false
            }
        }
        else if(tipo === 'func'){
            // Aguarda a resposta da função para efetuar a condicional:
            let dados = await usuarioExistente(data, tipo)
            if(dados){
                // Aguarda a resposta da função para atualizar o tipo de funcionário:
                let cargo = await usuarioCargo(data.key)
                // Atualiza o tipoF de acordo com o cargo do funcionário, salva no localStorage e retorna usuário válido:
                let tipoF = tipoFuncionario(cargo)
                actualUserType.current = tipoF
                dataUser.tipoUser = tipoF
                localStorage.setItem('UserData', JSON.stringify(dataUser))
                return true
            }
            else{
                return false
            }
        }
        else if(tipo === 'cli'){
            // Aguarda a resposta da função para efetuar a condicional:
            let dados = await usuarioExistente(data, tipo)
            if(dados.success){
                // Guarda os dados do cliente no localStorage e retorna true para signIn
                actualUserType.current = tipo
                dataUser = {
                    key: dados.obj.cpf,
                    senha: dados.obj.senha,
                    tipoUser: tipo,
                    conta: dados.obj.conta
                }
                localStorage.setItem('UserData', JSON.stringify(dataUser))
                return true
            }
            else{
                return false
            }
        }
    }

    // Valida os dados de Admin:
    const isAdmin = (data)=>{
        return (data.key === adminUser.user && data.password === adminUser.password)
    }
    
    // Verifica se exite o usuário no banco e se o login está correto, retornando true e false:
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

    // Verifica qual o cargo do funcionário no bd e retorna ele:
    const usuarioCargo = async(key) =>{
        try{
            const resposta = await axios.get("http://localhost:8800/func/")
            let funcChoose = resposta.data.filter((funcionarios)=> funcionarios.mat === key)
            return funcChoose[0].cargo
        }catch(err){
            console.log(err);
        }
    }

    // Retorna o tipo atualizado para validar as rotas de cada funcionário:
    const tipoFuncionario = (cargo) =>{
        const tipo = {
            gerente: 'ger',
            caixa: 'cai',
            atendente: 'atd'
        }
        return tipo[cargo]
    }
    // Atualiza os dados do cliente que está acessando a conta e compartilha com o restante da aplicação:
    const receberDadosCliente = (data) =>{
        cliente.current = data
        return 
    }
    const limparDadosCliente = () =>{
        cliente.current = ''
        return
    }
// ============================================== LÓGICA PARA CRIAR CLIENTES ===========================================================
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

    // Busca pelas contas atreladas ao cpf do cliente que acessou:
    const getConts = async (cpf) => {
        try {
            // Recebe nome, conta, cpf, agencia, saldo e senha do BD:
            const contasCliente = await axios.get("http://localhost:8800/clienteConta/");
            // Filtrar apenas os registros onde cpf da conta seja igual ao cpf do cliente
            const contasAssociadas = contasCliente.data.filter((conta) => conta.cpf === cpf)

            return contasAssociadas
        } catch (error) {
            alert(error);
        }
      }

    const getTypeTrans = (tipo)=>{
    tipoTrans.current = ''
    tipoTrans.current = tipo
    // console.log(tipoTrans.current);
    }

    return(

        <LoginContext.Provider value={{autenticarTipoUsuario, getTypeTrans, tipoTrans, actualUserType, cliente, receberDadosCliente, limparDadosCliente, userLogOut, existeCpf, getConts}}>
            {children}
        </LoginContext.Provider>
    )
}