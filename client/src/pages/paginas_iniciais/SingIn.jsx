import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Importando componentes:
import InputBorderBottom from "../../componentes/InputBorderBottom";
import ButtonWithIcon from "../../componentes/ButtonWithIcon";
import ErrorMessage from "../../componentes/ErrorMessage";
// importando icones:
import { seta } from '../../icons/icones'

const loginAcessSchema = z.object({
    cpf: z.string().length(11, {message: 'Digite um cpf válido'}),
    password: z.string().min(6, {message: 'Deve conter 6 caracteres'})
}).refine(data => data.cpf !== undefined || data.password !== undefined, {
    message: 'Campo obrigatório'
})

export default function SingIn(){
    const irPara = useNavigate()
    const fundo = {
        backgroundImage: "url('https://media.istockphoto.com/id/1442295199/pt/foto/successful-financier-investor-works-inside-office-at-work-businessman-in-business-suit-uses.jpg?s=1024x1024&w=is&k=20&c=0SNAhOhTTARN8a85GRk9AtNgl5dF0RFK7NvvZhNGEw8=')"
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginAcessSchema)
    })
    const onSubmit = async(data)=>{
        const resposta = await axios.post("http://localhost:8800/login", {
            cpf: data.cpf,
            senha: data.password
        })
        localStorage.setItem("token", resposta.data.token)
        irPara('/agency')
    }
    return(
        <div className="flex flex-row items-center w-full">
            <div style={fundo}
            className="w-[50%] h-screen bg-left bg-auto"
            >
                <Link to={'/'} className="text-center text-2xl text-zinc-100 font-bold absolute left-3 top-2 no-underline hover:text-cyan-800">NullBank</Link>
            </div>
            <div className="h-screen w-[50%] flex flex-col">
                <div className="w-[88%] h-[80%] flex flex-col p-10 items-center self-center justify-center gap-2">
                    <span className="text-3xl font-semibold self-start ml-[13%] mb-3">Acesse sua conta</span>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[75%] h-[50%] border-solid border-red-500 gap-y-6">
                        <span className="self-start text-sm">CPF</span>
                        <InputBorderBottom width={'full'} register={register} label={'cpf'}/>
                        {errors.cpf && <ErrorMessage message={errors.cpf?.message}/>}
                        <span className="self-start text-sm mt-4">Senha</span>
                        <InputBorderBottom width={'full'} type={'password'} register={register} label={'password'} />
                        {errors.cpf && <ErrorMessage message={errors.password?.message}/>}
                        <ButtonWithIcon width={'[90%]'} route={'/home'} content={'Entrar'} icon={seta}/>
                    </form>
                </div>
                <div className="bg-zinc-200 flex flex-row items-center justify-around w-full h-[20%]">
                    <Link to={'/'} className="no-underline font-semibold text-sm text-cyan-600 hover:text-cyan-500">Sou funcionário</Link>
                    <Link to={'/'} className="no-underline font-semibold text-sm text-cyan-600 hover:text-cyan-500">Não sou cliente</Link>
                </div>
            </div>
        </div>
    )
}