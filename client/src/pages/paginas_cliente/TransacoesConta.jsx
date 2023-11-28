
import styled from "styled-components";
import Form from "../../componentes/transacoes/FormsTrans"
import TableTrans from "../../componentes/transacoes/TableTrans";
import { toast, ToastContainer } from "react-toastify";
import GlobalStyle from "../../styles/global";
import React, { useEffect, useState } from "react";
import axios from "axios";



const Container = styled.div`
  width: auto;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function DadosTransacoes() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const clienteCpf = '12345678901';

        // Obter contas associadas ao cliente
        const resNumero = await axios.get("http://localhost:8800/conta_cliente/");
        const contasAssociadas = resNumero.data
          .filter((conta) => conta.clientes_cpf === clienteCpf)
          .map((conta) => conta.contas_numero);
        
        // Obter todas as transações
        const resTransacao = await axios.get("http://localhost:8800/transacoes/");
        
        // Filtrar as transações com base nas contas associadas
        const transacoesAssociadas = resTransacao.data.filter((transacao) =>
          contasAssociadas.includes(transacao.conta_principal)
        );
        
        // Atualizar o estado com as transações associadas
        setUsers(transacoesAssociadas);
        
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => {
      getUsers();
    }, []); 

  return (
    <>
      <Container>
        <Title>Transações</Title>
        <Form  onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <TableTrans setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default DadosTransacoes;