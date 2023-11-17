// Importando bibliotecas e seus componentes:
import React from "react";
import { Link } from "react-router-dom";
// Importando componentes:
import FloatingLabel from "../componentes/FloatingLabel";
import ButtonWithIcon from "../componentes/ButtonWithIcon"
// Importando ícones:
import { seta } from "../icons/icones";
export default function SignUp(){
    const fundo = {
        backgroundImage: "url('https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }
    return(
        <div className="w-screen h-screen flex flex-row">
            <div className="w-[45%] h-full flex flex-col">
                <div className="w-full h-[60%] bg-cyan-600 p-4 flex items-center justify-center">
                    <h1 className="text-white text-5xl">Com o Nullbank a resposta vem em menos de 1 minuto</h1>
                </div>
                <div style={fundo}
                className="w-full h-[40%] bg-center bg-no-repeat bg-cover"
                >
                    imagem
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <Link to={'/'} className="w-10 h-10 rounded-3xl flex items-center justify-center hover:bg-cyan-100 text-cyan-600 text-xl
                font-semibold absolute right-10 top-6 no-underline">X</Link>
                <span className="self-center mt-2 text-cyan-500 text-xl font-light tracking-widest mt-4 mb-4">Insira seus dados</span>
                {/* Parte do formulário */}
                <div className="w-[90%] h-[90%] px-4 py-2 flex flex-col items-start flex-wrap">
                    {/* Dados pessoais */}
                    <div className="flex flex-row items-center w-full mb-8 justify-between">
                        <FloatingLabel width={'[50%]'} type={'text'} label={'Nome completo'}/>
                        <FloatingLabel width={'[20%]'} type={'date'} label={'Data de Nascimento'}/>
                        <FloatingLabel width={'[15%]'} type={'text'} label={'UF'}/>
                    </div>
                    {/* Documentos */}
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-start w-[38%] mb-8 gap-y-8">
                            <FloatingLabel width={'[90%]'} type={'number-format'} label={'RG'}/>
                            <FloatingLabel width={'[90%]'} type={'number_format'} label={'CPF'}/>
                        </div>
                        <div className="flex flex-col items-start w-[30%] mb-8 gap-y-8">
                            <FloatingLabel width={'[70%]'} type={'text'} label={'Orgão Emissor'}/>
                            <FloatingLabel width={'[70%]'} type={'number_format'} label={'CEP'}/>
                        </div>
                    {/* Endereço */}
                        <div className="flex flex-col items-start w-[30%] mb-8 gap-y-8">
                            <FloatingLabel width={'[90%]'} type={'text'} label={'Cidade'}/>
                            <FloatingLabel width={'[90%]'} type={'text'} label={'Estado'}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full mb-8">
                        <FloatingLabel width={'[25%]'} type={'text'} label={'Tipo de logradouro'}/>
                        <FloatingLabel width={'[50%]'} type={'text'} label={'Nome do logradouro'}/>
                        <FloatingLabel width={'[20%]'} type={'number_format'} label={'Número'}/>
                    </div>
                    {/* Contato */}
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-start w-[28%] mb-8 gap-y-8">
                            <FloatingLabel width={'[70%]'} type={'number-format'} label={'Tipo de Telefone'}/>
                            <FloatingLabel width={'[70%]'} type={'text'} label={'Tipo de email'}/>
                        </div>
                        <div className="flex flex-col items-start w-[37%] mb-8 gap-y-8">
                            <FloatingLabel width={'[90%]'} type={'number_format'} label={'Telefone'}/>
                            <FloatingLabel width={'[90%]'} type={'number_format'} label={'email'}/>
                        </div>
                        <div className="flex flex-col w-[25%] mb-8 gap-y-8">
                            <FloatingLabel width={'full'} type={'text'} label={'Bairro'}/>
                        </div>
                    </div>
                    <ButtonWithIcon width={'[50%]'} route={'###'} icon={seta} content={'Confirmar'}/>
                </div>
            </div>
        </div>
    )
}