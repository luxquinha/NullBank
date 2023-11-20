import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// Importando componentes:
import InputBorderBottom from "../../componentes/InputBorderBottom";
import ButtonWithIcon from "../../componentes/ButtonWithIcon";
// importando icones:
import { seta } from '../../icons/icones'

export default function SingIn(){
    const fundo = {
        backgroundImage: "url('https://media.istockphoto.com/id/1442295199/pt/foto/successful-financier-investor-works-inside-office-at-work-businessman-in-business-suit-uses.jpg?s=1024x1024&w=is&k=20&c=0SNAhOhTTARN8a85GRk9AtNgl5dF0RFK7NvvZhNGEw8=')"
    }
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data)=>{
        console.log(data)
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
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[75%] h-[50%] border-solid border-red-500">
                        <span className="self-start text-sm">CPF</span>
                        <InputBorderBottom width={'full'} register={register} label={'cpf'}/>
                        <span className="self-start text-sm mt-4">Senha</span>
                        <InputBorderBottom width={'full'} type={'password'} register={register} label={'password'} />
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