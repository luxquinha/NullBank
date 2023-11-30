import React from "react";
import { useNavigate } from "react-router-dom";
import useLoginContext from "../../hooks/useLoginContext";

export default function CardCont({nome, numConta, saldo, numAgencia, cpfCliente, senha}){
    const { receberDadosCliente } = useLoginContext()
    const irPara = useNavigate()
    const handleClick = ()=>{
        // salva os dados da conta escolhida para o login:
        const dadosCliente = {
            key: cpfCliente,
            password: senha,
            tipo: 'cli',
            conta: numConta
        }
        receberDadosCliente(dadosCliente)
        irPara('/signIn/cli')
    }
    return(
        <button onClick={handleClick} className="no-underline w-[45%] h-[50%] p-3 mt-4 shadow-xl bg-slate-200 rounded-xl flex flex-col items-start justify-between">
            <div className="flex flex-col items-start">
                <span className="text-cyan-800 font-semibold text-xl">{nome}</span>
                <span className="text-cyan-800 font-semibold text-md">{`Conta - ${numConta}`}</span>
                <span className="text-cyan-800 font-semibold text-md mt-3">{`Agência - ${numAgencia}`}</span>
            </div>
            <div className="flex flex-row justify-between items-center self-end w-full">
                <span className="text-zinc-500 text-xl font-bold">Saldo em Conta:</span>
                <span className="text-green-500 text-2xl font-bold">{`R$ ${saldo}`}</span>
            </div>
        </button>
    )
}