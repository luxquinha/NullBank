import React, { useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom";
import useLoginContext from "../../hooks/useLoginContext";
// Importando componentes:
import InputBorderBottom from "../../componentes/InputBorderBottom";
import ButtonWithIcon from "../../componentes/ButtonWithIcon";
import ErrorMessage from "../../componentes/ErrorMessage";
// importando icones:
import { seta } from '../../icons/icones'

const loginAcessSchema = z.object({
    key: z.string(),
    password: z.string().min(4, {message: 'Minimo 4 caracteres'})
}).refine(data => data.cpf !== undefined || data.password !== undefined, {
    message: 'Campo obrigatório'
})

export default function SignIn(){
    const { autenticarTipoUsuario, actualUserType, cliente, limparDadosCliente } = useLoginContext()
    const [tipoUsuario, setTipoUsuario] = useState('dba')
    const { acesso } = useParams()
    const irPara = useNavigate()
    const fundo = {
        backgroundImage: "url('https://media.istockphoto.com/id/1442295199/pt/foto/successful-financier-investor-works-inside-office-at-work-businessman-in-business-suit-uses.jpg?s=1024x1024&w=is&k=20&c=0SNAhOhTTARN8a85GRk9AtNgl5dF0RFK7NvvZhNGEw8=')"
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginAcessSchema)
    })

    useLayoutEffect(()=>{
        if(acesso)
            setTipoUsuario('cli')

        // console.log(cliente.current);
    },[])

    // Retorna a rota de acordo com o tipo de usuário:
    const getRoute = (vision) =>{
        const route = {
            dba: '/admin',
            ger: '/gerente',
            atd: '/atendente',
            cai: '/caixa',
            cli: '/home'
        }
        return route[vision] || '/signIn'
    }

    // Verifica se é um usuário válido e envia para a rota correta:
    const onSubmit = async (data)=>{
        let hasPermission = await autenticarTipoUsuario(data, tipoUsuario)
        setTimeout(()=>{
            // console.log(userType);
            if(hasPermission){
                irPara(getRoute(actualUserType.current))
            }
        },2000)
    }

    const handleClick = () =>{
        limparDadosCliente()
        irPara('/')
    }

    return(
        <div className="flex flex-row items-center w-full">
            <div style={fundo}
            className="w-[50%] h-screen bg-left bg-auto"
            >
                <button onClick={handleClick} className="text-center text-2xl text-zinc-100 font-bold absolute left-3 top-2 no-underline hover:text-cyan-800">NullBank</button>
            </div>
            <div className="h-screen w-[50%] flex flex-col">
                <div className="w-[88%] h-[80%] flex flex-col p-10 items-center self-center justify-center gap-2">
                    <span className="text-3xl font-semibold self-start ml-[13%] mb-3">
                        {(tipoUsuario === 'func') ? 'Seja bem-vindo Funcionário' : (tipoUsuario === 'cli') ? 
                        'Acesse sua conta' : 'Seja bem-vindo Administrador'}
                    </span>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[75%] h-[50%] border-solid border-red-500 gap-y-6">
                        <span className="self-start text-sm">
                        {(tipoUsuario === 'func') ? 'Matrícula' : (tipoUsuario === 'cli') ? 
                        'Conta' : 'Usuário'}
                        </span>
                        <InputBorderBottom width={'full'} register={register} label={'key'} valor={cliente.current?.conta}/>
                        {errors.key && <ErrorMessage message={errors.key?.message}/>}
                        <span className="self-start text-sm mt-4">Senha</span>
                        <InputBorderBottom width={'full'} type={'password'} register={register} label={'password'} />
                        {errors.cpf && <ErrorMessage message={errors.password?.message}/>}
                        <ButtonWithIcon width={'[90%]'} route={'/home'} content={'Entrar'} icon={seta}/>
                    </form>
                </div>
                <div className="bg-zinc-200 flex flex-row items-center justify-around w-full h-[20%] relative">
                    <button className={`no-underline font-semibold text-sm text-cyan-600 hover:text-cyan-500 
                    ${tipoUsuario === 'cli' ? 'invisible':''}`} onClick={()=>{setTipoUsuario('func')}}>Sou funcionário</button>
                    <Link to={`/chooseCont/${cliente.current?.key}`} className={`no-underline font-semibold text-cyan-700 p-2 rounded-xl flex flex-row items-center hover:bg-zinc-300 absolute left-8 
                    ${tipoUsuario === 'cli' ? '':'invisible'}`}>
                        <span className="rotate-180 mr-1">{seta}</span>
                        <span>Voltar</span>
                    </Link>
                    <button className={`no-underline font-semibold text-sm text-cyan-600 hover:text-cyan-500 
                    ${tipoUsuario === 'cli' ? 'invisible':''}`} onClick={()=>{setTipoUsuario('dba')}}>Sou DBA</button>
                </div>
            </div>
        </div>
    )
}