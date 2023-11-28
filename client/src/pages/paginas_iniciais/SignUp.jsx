// Importando bibliotecas e seus componentes:
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// Importando componentes:
import FloatingLabel from "../../componentes/FloatingLabel";
import ButtonWithIcon from "../../componentes/ButtonWithIcon"
import ErrorMessage from "../../componentes/ErrorMessage";
// Importando ícones:
import { seta } from "../../icons/icones";

// const createUserSchema = z.object({

//     name: z.string().array().min(10, {message: 'Informe o nome completo'}),
//     password: z.string().min(6, {message: 'Deve conter 6 caracteres'}),
//     birth_date: z.date({message: 'data error'}),

//     uf: z.string().length(2, {message: 'Informe uma UF válida'}),
//     cpf: z.string().length(11, {message: 'Digite um cpf válido'}),
//     rg: z.string().length(11, {message: 'Digite um cpf válido'}),
//     ssp: z.string().length(2, {message: 'Informe um orgão válido'}),

//     zipCode: z.string().length(8, {message: 'Informe um CEP válido'}),
//     state: z.string().min(4, {message: 'Informe um estado válido'}),
//     city: z.string().min(5, {message: 'Informe uma cidade válida'}),
//     district: z.string().min(5, {message: 'Informe uma bairro válido'}),
//     streetType: z.string().min(3, {message: 'Informe um tipo de logradouro válido'}),
//     end: z.string().min(8, {message: 'Informe um endereço válido'}),
//     num: z.string().min(1, {message: 'Campo obrigatório'}),

//     phoneType: z.string().min(5, {message: 'Informe um tipo válido'}),
//     phoneNumber: z.string().min(11, {message: 'Informe um telefone válido'}),
//     emailType: z.string().min(5, {message: 'Informe um tipo válido'}),
//     email: z.string(),
// }).refine(data => data.name !== undefined || data.password !== undefined || data.birth_date !== undefined
//     || data.uf !== undefined || data.cpf !== undefined || data.rg !== undefined || data.ssp !== undefined
//     || data.zipCode !== undefined || data.state !== undefined || data.city !== undefined || data.district !== undefined 
//     || data.streetType !== undefined || data.end !== undefined || data.num !== undefined || data.phoneType !== undefined
//     || data.phoneNumber !== undefined || data.emailType !== undefined || data.email !== undefined, {
//     message: 'Campo obrigatório'
// })

export default function SignUp(){
    const { cpf } = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm({
        // resolver: zodResolver(createUserSchema)
    })
    const fundo = {
        backgroundImage: "url('https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }

    const onSubmit = async (data) => {
        console.log('entrou');
        console.log(data);
        // Cria um cliente no BD:
        // await axios
        // .post("http://localhost:8800/clientes/", {
        //   cpf: data.cpf,
        //   nome_completo: data.name,
        //   rg: data.rg,
        //   orgao_emissor: data.ssp,
        //   uf: data.uf,
        //   data_nascimento: data.birth_date,
        //   tipo_logradouro: data.streetType,
        //   nome_logradouro: data.end,
        //   numero: data.num,
        //   bairro: data.district,
        //   cep: data.zipCode,
        //   cidade: data.city,
        //   estado: data.state,
        // //   senha: data.password
        // })
        // .then(({ message }) => toast.success(message))
        // .catch(({ message }) => toast.error(message));
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
                className="w-[90%] h-[90%] px-4 py-2 flex flex-col items-start flex-wrap text-zinc-400 text-medium gap-y-6">
                    {/* Dados pessoais */}
                    <div className="flex flex-row items-start w-full h-12 justify-between">
                        <div className="flex flex-col w-[50%]">
                            <FloatingLabel width={'full'} type={'text'} content={'Nome completo'} label={'name'} register={register} rules={{required: 'Campo obrigatório'}}/>
                            {errors.name && <ErrorMessage message={errors.name?.message}/>}
                        </div>
                        <div className="flex flex-col w-[25%]">
                            <FloatingLabel width={'full'} type={'date'} content={'Data de Nascimento'} label={'birth_date'} register={register}  rules={{required: 'Campo obrigatório'}}/>
                            {errors.birth_date && <ErrorMessage message={errors.birth_date?.message}/>}
                        </div>
                        <div className="flex flex-col w-[20%]">
                            <FloatingLabel width={'[full]'} type={'text'} content={'UF'} label={'uf'} register={register}  rules={{required: 'Campo obrigatório'}}/>
                            {errors.uf && <ErrorMessage message={errors.uf?.message}/>}
                        </div>
                    </div>
                    {/* Documentos */}
                    <div className="flex flex-row items-center justify-between w-full h-28">
                        <div className="flex flex-col items-start h-full w-[38%] gap-y-6">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'RG'} label={'rg'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.rg && <ErrorMessage message={errors.rg?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} value={cpf} content={'CPF'} label={'cpf'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.cpf && <ErrorMessage message={errors.cpf?.message}/>}
                            </div>
                        </div>
                        <div className="flex flex-col items-start h-full w-[30%] gap-y-6">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[70%]'} type={'text'} content={'Orgão Emissor'} label={'ssp'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.ssp && <ErrorMessage message={errors.ssp?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[70%]'} type={'text'} content={'CEP'} label={'zipCode'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.zipCode && <ErrorMessage message={errors.zipCode?.message}/>}
                            </div>
                        </div>
                    {/* Endereço */}
                        <div className="flex flex-col items-start h-full w-[30%] gap-y-6">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Cidade'} label={'city'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.city && <ErrorMessage message={errors.city?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Estado'} label={'state'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.state && <ErrorMessage message={errors.state?.message}/>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full h-12">
                        <div className="flex flex-col w-[25%]">
                            <FloatingLabel width={'full'} type={'text'} content={'Tipo de logradouro'} label={'streetType'} register={register} rules={{required: 'Campo obrigatório'}}/>
                            {errors.streetType && <ErrorMessage message={errors.streetType?.message}/>}
                        </div>
                        <div className="flex flex-col w-[50%]">
                            <FloatingLabel width={'full'} type={'text'} content={'Nome do logradouro'} label={'end'} register={register} rules={{required: 'Campo obrigatório'}}/>
                            {errors.end && <ErrorMessage message={errors.end?.message}/>}
                        </div>
                        <div className="flex flex-col w-[20%]">
                            <FloatingLabel width={'full'} type={'text'} content={'Número'} label={'num'} register={register} rules={{required: 'Campo obrigatório'}}/>
                            {errors.num && <ErrorMessage message={errors.num?.message}/>}
                        </div>
                    </div>
                    {/* Contato */}
                    <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start w-[28%] gap-y-6 h-28 justify-around">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Tipo de Telefone'} label={'phoneType'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.phoneType && <ErrorMessage message={errors.phoneType?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Tipo de email'} label={'emailType'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.emailType && <ErrorMessage message={errors.emailType?.message}/>}
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-[37%] gap-y-6 h-28 justify-around">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Telefone'} label={'phoneNumber'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.phoneNumber && <ErrorMessage message={errors.phoneNumber?.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'email'} label={'email'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.email && <ErrorMessage message={errors.email?.message}/>}
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-[25%] gap-y-6 h-28 justify-around">
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'text'} content={'Bairro'} label={'district'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.district && <ErrorMessage message={errors.district.message}/>}
                            </div>
                            <div className="flex flex-col w-full">
                                <FloatingLabel width={'[90%]'} type={'password'} content={'Senha'} label={'password'} register={register} rules={{required: 'Campo obrigatório'}}/>
                                {errors.password && <ErrorMessage message={errors.password.message}/>}
                            </div>
                        </div>
                    </div>
                    <ButtonWithIcon width={'[50%]'} icon={seta} content={'Confirmar'}/>
                </form>
            </div>
        </div>
    )
}