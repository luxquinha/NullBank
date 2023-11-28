import React from "react";
import FloatingLabel from "../FloatingLabel";
import ErrorMessage from "../ErrorMessage";
import ButtonWithIcon from "../ButtonWithIcon";
import { seta } from "../../icons/icones";
import { useForm } from 'react-hook-form'
import { useParams } from "react-router-dom";
import useLoginContext from '../../hooks/useLoginContext'
import { useNavigate } from "react-router-dom";

export default function RegisterForm({title, buttonText, sendData, user, logoutText}){
    const { cpf } = useParams()
    const irPara = useNavigate()
    const { userLogOut } = useLoginContext()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleClick = ()=>{
        userLogOut()
        if(localStorage.getItem('UserData')===null)
            irPara('/signIn')
    }

    const onSubmit = (data) => {
        sendData(data)
    };

    return(
        <div className="flex flex-col items-center w-full">
                <button onClick={handleClick} className={`text-cyan-600 absolute right-10 top-6 no-underline font-semibold ${logoutText ? 'text-sm hover:text-cyan-500'
                :'w-10 h-10 rounded-3xl flex items-center justify-center hover:bg-zinc-200 text-xl'} `}>{logoutText ?? 'X'}</button>
                <span className="self-center mt-2 text-cyan-500 text-xl font-light tracking-widest mt-4 mb-4">{title}</span>
                {/* Parte do formulário */}
                <form onSubmit={handleSubmit(onSubmit)}
                className="w-[90%] h-[90%] px-4 py-2 flex flex-col items-start flex-wrap text-zinc-400 text-medium gap-y-6">
                    {/* Dados pessoais */}
                    <div className="flex flex-row items-start w-full h-12 justify-between">
                        <div className="flex flex-col w-[50%]">
                            <FloatingLabel width={'full'} type={'text'} content={'Nome completo'} label={'name'} 
                            register={register} rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.nome_completo}/>
                            {errors.name && <ErrorMessage message={errors.name?.message}/>}
                        </div>
                        <div className="flex flex-col w-[25%]">
                            <FloatingLabel width={'full'} type={'date'} content={'Data de Nascimento'} label={'birth_date'} 
                            register={register}  rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.data_nascimento}/>
                            {errors.birth_date && <ErrorMessage message={errors.birth_date?.message}/>}
                        </div>
                        <div className="flex flex-col w-[20%]">
                            <FloatingLabel width={'[full]'} type={'text'} content={'UF'} label={'uf'} register={register}  
                            rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.uf}/>
                            {errors.uf && <ErrorMessage message={errors.uf?.message}/>}
                        </div>
                    </div>
                    {/* Documentos */}
                    <div className="flex flex-row items-center justify-between w-full h-28">
                        <div className="flex flex-col items-start h-full w-[38%] gap-y-6">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'RG'} label={'rg'} register={register} 
                                rules={{required: 'Campo obrigatório'}} value={user[0]?.rg}/>
                                {errors.rg && <ErrorMessage message={errors.rg?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} value={cpf ?? user[0]?.cpf} content={'CPF'} label={'cpf'} 
                                register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.cpf && <ErrorMessage message={errors.cpf?.message}/>}
                            </div>
                        </div>
                        <div className="flex flex-col items-start h-full w-[30%] gap-y-6">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[70%]'} type={'text'} content={'Orgão Emissor'} label={'ssp'} 
                                register={register} rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.orgao_emissor}/>
                                {errors.ssp && <ErrorMessage message={errors.ssp?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[70%]'} type={'text'} content={'CEP'} label={'zipCode'} register={register} 
                                rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.cep}/>
                                {errors.zipCode && <ErrorMessage message={errors.zipCode?.message}/>}
                            </div>
                        </div>
                    {/* Endereço */}
                        <div className="flex flex-col items-start h-full w-[30%] gap-y-6">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Cidade'} label={'city'} register={register} 
                                rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.cidade}/>
                                {errors.city && <ErrorMessage message={errors.city?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Estado'} label={'state'} register={register} 
                                rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.estado}/>
                                {errors.state && <ErrorMessage message={errors.state?.message}/>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full h-12">
                        <div className="flex flex-col w-[25%]">
                            <FloatingLabel width={'full'} type={'text'} content={'Tipo de logradouro'} label={'streetType'} 
                            register={register} rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.tipo_logradouro}/>
                            {errors.streetType && <ErrorMessage message={errors.streetType?.message}/>}
                        </div>
                        <div className="flex flex-col w-[50%]">
                            <FloatingLabel width={'full'} type={'text'} content={'Nome do logradouro'} label={'end'} register={register} 
                            rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.nome_logradouro}/>
                            {errors.end && <ErrorMessage message={errors.end?.message}/>}
                        </div>
                        <div className="flex flex-col w-[20%]">
                            <FloatingLabel width={'full'} type={'text'} content={'Número'} label={'num'} register={register} 
                            rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.numero}/>
                            {errors.num && <ErrorMessage message={errors.num?.message}/>}
                        </div>
                    </div>
                    {/* Contato */}
                    <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start w-[28%] gap-y-6 h-28 justify-around">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Tipo de Telefone'} label={'phoneType'} 
                                register={register} rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.tipo_telefone}/>
                                {errors.phoneType && <ErrorMessage message={errors.phoneType?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Tipo de email'} label={'emailType'} register={register} 
                                rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.tipo_email}/>
                                {errors.emailType && <ErrorMessage message={errors.emailType?.message}/>}
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-[37%] gap-y-6 h-28 justify-around">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Telefone'} label={'phoneNumber'} register={register} 
                                rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.numero_telefone}/>
                                {errors.phoneNumber && <ErrorMessage message={errors.phoneNumber?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'email'} label={'email'} register={register} 
                                rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.email}/>
                                {errors.email && <ErrorMessage message={errors.email?.message}/>}
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-[25%] gap-y-6 h-28 justify-around">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Bairro'} label={'district'} register={register} 
                                rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.bairro}/>
                                {errors.district && <ErrorMessage message={errors.district.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'password'} content={'Senha'} label={'password'} register={register} 
                                rules={{required: 'Campo obrigatório'}} placeholder={user[0]?.senha}/>
                                {errors.password && <ErrorMessage message={errors.password.message}/>}
                            </div>
                        </div>
                    </div>
                    <ButtonWithIcon width={'[50%]'} icon={seta} content={buttonText}/>
                </form>
            </div>
    )
}