import React, { useLayoutEffect, useState } from "react";
import useClientContext from "../../hooks/useClientContext";

export default function Extrato(){
  const { getTrasations } = useClientContext()
  const [transations, setTransations] = useState([{}])

  const dados = async()=>{
    let dados = await getTrasations()
    setTransations(dados)
  }
  useLayoutEffect(()=>{
    dados()
  },[])
  
  const handleDate = (dateTime) =>{
    if(dateTime !== undefined){
        let divisao = dateTime.split('T')
        return divisao[0]
    }
    return ''
  }

  return (
    <div className="flex items-center mt-12">
        <table className="table table-striped text-center">
          <thead className="sticky top-12">
            <tr className="table-light align-middle">
              <th className="table-light">Numero Transacao</th>
              <th className="table-light">Tipo</th>
              <th className="table-light">Data</th>
              <th className="table-light">Valor</th>
              <th className="table-light">Conta Principal</th>
              <th className="table-light">Conta Transação</th>
            </tr>
          </thead>
          <tbody>
            {transations.map((trans, i) => (
              <tr className="table-light align-middle" key={i}>
                <td className="table-light">{trans.numero_transacao}</td>
                <td className="table-light">{trans.tipo} </td>
                <td className="table-light">{handleDate(trans.data_hora)}</td>
                <td className="table-light">{trans.valor} </td>
                <td className="table-light">{trans.conta_principal} </td>
                <td className="table-light">{trans.conta_transacao} </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    );
}