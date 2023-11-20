// Importando bibliotecas e seus componentes:
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
// Importando componentes:
import FloatingLabel from "../../componentes/FloatingLabel";
import ButtonWithIcon from "../../componentes/ButtonWithIcon"
// Importando ícones:
import { seta } from "../../icons/icones";
export default function SignUp(){
    const { register, handleSubmit, formState: { errors } } = useForm()
    const fundo = {
        backgroundImage: "url('https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }

    const onSubmit = (data) => {
        console.log(data);
    };

    return(
        <div className="w-screen h-screen flex flex-row">
            <div className="w-[45%] h-full flex flex-col">
                <div className="w-full h-[60%] bg-zinc-700 p-4 flex items-center justify-center">
                    <h1 className="text-white text-5xl">Com o Nullbank a resposta vem em menos de 1 minuto</h1>
                </div>
                <div style={fundo}
                className="w-full h-[40%] bg-center bg-no-repeat bg-cover"
                >
                    imagem
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <Link to={'/'} className="w-10 h-10 rounded-3xl flex items-center justify-center hover:bg-zinc-200 text-cyan-600 text-xl
                font-semibold absolute right-10 top-6 no-underline">X</Link>
                <span className="self-center mt-2 text-cyan-500 text-xl font-light tracking-widest mt-4 mb-4">Insira seus dados</span>
                {/* Parte do formulário */}
                <form onSubmit={handleSubmit(onSubmit)}
                className="w-[90%] h-[90%] px-4 py-2 flex flex-col items-start flex-wrap text-zinc-400 text-medium">
                    {/* Dados pessoais */}
                    <div className="flex flex-row items-center w-full mb-8 justify-between">
                        <FloatingLabel width={'[50%]'} type={'text'} content={'Nome completo'} label={'name'} register={register}/>
                        <FloatingLabel width={'[20%]'} type={'date'} content={'Data de Nascimento'} label={'birth_date'} register={register}/>
                        <FloatingLabel width={'[15%]'} type={'text'} content={'UF'} label={'UF'} register={register}/>
                    </div>
                    {/* Documentos */}
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-start w-[38%] mb-8 gap-y-8">
                            <FloatingLabel width={'[90%]'} type={'number-format'} content={'RG'} label={'rg'} register={register}/>
                            <FloatingLabel width={'[90%]'} type={'number_format'} content={'CPF'} label={'cpf'} register={register}/>
                        </div>
                        <div className="flex flex-col items-start w-[30%] mb-8 gap-y-8">
                            <FloatingLabel width={'[70%]'} type={'text'} content={'Orgão Emissor'} label={'ssp'} register={register}/>
                            <FloatingLabel width={'[70%]'} type={'number_format'} content={'CEP'} label={'cep'} register={register}/>
                        </div>
                    {/* Endereço */}
                        <div className="flex flex-col items-start w-[30%] mb-8 gap-y-8">
                            <FloatingLabel width={'[90%]'} type={'text'} content={'Cidade'} label={'city'} register={register}/>
                            <FloatingLabel width={'[90%]'} type={'text'} content={'Estado'} label={'state'} register={register}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full mb-8">
                        <FloatingLabel width={'[25%]'} type={'text'} content={'Tipo de logradouro'} label={'street_type'} register={register}/>
                        <FloatingLabel width={'[50%]'} type={'text'} content={'Nome do logradouro'} label={'end'} register={register}/>
                        <FloatingLabel width={'[20%]'} type={'number_format'} content={'Número'} label={'num'} register={register}/>
                    </div>
                    {/* Contato */}
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-start w-[28%] mb-8 gap-y-8">
                            <FloatingLabel width={'[70%]'} type={'number-format'} content={'Tipo de Telefone'} label={'phone_type'} register={register}/>
                            <FloatingLabel width={'[70%]'} type={'text'} content={'Tipo de email'} label={'email_type'} register={register}/>
                        </div>
                        <div className="flex flex-col items-start w-[37%] mb-8 gap-y-8">
                            <FloatingLabel width={'[90%]'} type={'number_format'} content={'Telefone'} label={'phone_number'} register={register}/>
                            <FloatingLabel width={'[90%]'} type={'number_format'} content={'email'} label={'email'} register={register}/>
                        </div>
                        <div className="flex flex-col w-[25%] mb-8 gap-y-8">
                            <FloatingLabel width={'[90%]'} type={'text'} content={'Bairro'} label={'neighborhood'} register={register}/>
                            <FloatingLabel width={'[90%]'} type={'password'} content={'Senha'} label={'password'} register={register}/>
                        </div>
                    </div>
                    <ButtonWithIcon width={'[50%]'} icon={seta} content={'Confirmar'}/>
                </form>
            </div>
        </div>
    )
}