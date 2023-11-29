import React, { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import CardCont from "../../componentes/clientes/CardCont";
import useLoginContext from "../../hooks/useLoginContext";

export default function ChooseCont(){
    const { getConts, limparDadosCliente } = useLoginContext()
    const irPara = useNavigate()
    const [contas, setContas] = useState([{}])
    const { cpf } = useParams()

    const pegarDados = async()=>{
        const dados = await getConts(cpf)
        if(dados !== undefined){
            let reordenar = [...dados]
            setContas(reordenar)
        }
    }

    const handleClick = () =>{
        limparDadosCliente()
        irPara('/')
    }

    useLayoutEffect(()=>{
        pegarDados()
    },[])

    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <button onClick={handleClick}
            className="no-underline absolute top-2 left-4 text-2xl text-zinc-500 font-bold cursor-pointer hover:text-cyan-800">NullBank</button>
            <div className="w-[80vw] h-[80vh] p-4 flex flex-col items-center justify-around gap-y-3">
                <span className="font-bold text-4xl text-cyan-600 tracking-wide">Qual conta você deseja ?</span>
                <div className="w-full h-[60vh] flex flex-row justify-around items-start">
                    {(contas.length > 0) ? contas.map((conta, i)=>(
                        <CardCont key={i} nome={conta.nome} saldo={conta.saldo} numAgencia={conta.agencia} 
                        numConta={conta.conta} cpfCliente={conta.cpf} senha={conta.senha}/>
                    )): ''}
                </div>
            </div>
        </div>
    )
}