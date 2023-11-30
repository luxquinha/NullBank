import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { seta } from "../../icons/icones";
import ErrorMessage from "../ErrorMessage";
import ButtonWithIcon from "../ButtonWithIcon";
import useLoginContext from "../../hooks/useLoginContext";


export default function UmaContaForm(){
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { tipoTrans } = useLoginContext()
// N° Trans | Tipo | Data | Valor | ContaP | ContaT
    const onSubmit = (data) => {
        let userData = JSON.parse(localStorage.getItem('UserData'))
        let dadosCompleto = {...data,
        tipo_trans: tipoTrans.current,
        conta: userData.conta,
        data_trans: new Date().toLocaleDateString(),
        conta_destino: ''
        }
        console.log(dadosCompleto)
        console.log(data)
    };

    return(
        <div className="w-[84.5vw] h-screen border flex items-center justify-center">
            <div className="bg-slate-200 shadow-md w-[35vw] h-[40vh] rounded-3xl p-3 flex flex-col items-center justify-around">
                <span className="text-2xl font-bold tracking-widest text-zinc-500">Preencha os campos abaixo</span>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col items-center justify-center mt-3">
                    <div className="w-full h-full flex flex-row">
                        <div className="w-full flex flex-col items-center">
                            <label htmlFor="valor" className="text-xl font-semibold tracking-wide text-zinc-500">Valor</label>
                            <input type="text" placeholder="R$ 00.00" name="valor" className="w-[10vw] h-[6vh] rounded-2 outline-none mb-3 p-2 text-center font-semibold" 
                            {...register('valor', {required: "Campo obrigatório"})}/>
                            {errors.valor && <ErrorMessage message={errors.valor?.message}/>}
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <label htmlFor="senha" className="text-xl font-semibold tracking-wide text-zinc-500">Senha</label>
                            <input type="password" name="senha" className="w-[10vw] h-[6vh] rounded-2 outline-none p-2 text-center font-semibold mb-3" 
                            {...register('senha', {required: "Campo obrigatório"})}/>
                            {errors.senha && <ErrorMessage message={errors.senha?.message}/>}
                        </div>
                    </div>
                    <ButtonWithIcon content={'Confirmar'} width={'[50%]'} icon={seta}/>
                </form>
            </div>
        </div>
    )
}