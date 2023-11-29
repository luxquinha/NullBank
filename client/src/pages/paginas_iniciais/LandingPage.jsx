// Importando bibliotecas e seus componentes:
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useLoginContext from '../../hooks/useLoginContext'
// Importando componentes:
import Header from "../../componentes/Header";
import InputBorderBottom from "../../componentes/InputBorderBottom";
import ButtonWithIcon from "../../componentes/ButtonWithIcon";
// importando icones:
import { seta } from "../../icons/icones";
import ErrorMessage from "../../componentes/ErrorMessage";

const cpfschema = z.object({
  cpf: z.string().length(11, {message: 'Digite um cpf válido'})
})

export default function LandingPage(){
    const { existeCpf } = useLoginContext()
    const irPara = useNavigate()
    const fundo = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2014/02/01/18/00/money-256315_1280.jpg')",
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(cpfschema)
    })
    // Verifica se existe algum cpf que dê match, evitando que crie dois clientes com a mesma chave:
    const onSubmit = (data)=>{
      existeCpf(data.cpf).then((resultado)=>{
        console.log(resultado);
        if(resultado)
          // Abraão coloca aquela tua mensagem de erro bonitinha kkk:
          alert(`O cpf informado já possui uma conta`)
        else
          irPara(`/signUp/${data.cpf}`)
      }).catch((erro)=>{
        console.log(erro);
      })
    }

    return (
        <div className="w-screen h-screen">
          <Header/>
          <div style={fundo} className="w-screen h-[92.6vh] bg-no-repeat bg-cover bg-bottom bg-fixed flex flex-row items-center justify-center"> 
            <div className="w-[65%] h-full flex flex-col items-center justify-center gap-5 text-white">
                <h2 className="text-5xl tracking-wide font-semibold w-[80%] h-[20%] text-start">Tenha N Possibilidades de produtos para N Possibilidades na vida</h2>
                <span className="text-2xl font-medium text-start tracking-wide w-[80%] h-[10%]">O que você precisa pra ficar no controle da sua vida financeira tem no app do Nullbank.</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="h-[50%] w-[24%] bg-zinc-100 rounded-4 p-6 flex flex-col justify-between">
                <span className="text-2xl font-semibold">Peça sua conta e cartão de crédito do Nullbank</span>
                <div>
                  <InputBorderBottom placeholder={'Digite seu CPF'} width={"full"} register={register} label={'cpf'}/>
                  {errors.cpf && <ErrorMessage message={errors.cpf.message}/>}
                </div>
                <ButtonWithIcon width={'full'} content={'Continuar'} icon={seta} route={'/signUp'}/>
            </form>
          </div>
        </div>
      );
}