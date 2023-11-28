
import styled from "styled-components";

import Form from "../../componentes/contas/FormsContas";
import TableContas from "../../componentes/contas/TableContas";
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

function DadosConta() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/contas/");
        const clienteCpf = '12345678901';
        const resNumero = await axios.get("http://localhost:8800/conta_cliente/");
        const contasAssociadas = resNumero.data
        .filter((conta) => conta.clientes_cpf === clienteCpf)
        .map((conta) => conta.contas_numero);

        // console.log("Contas associadas:", contasAssociadas);
        // Filtrar apenas os registros onde clientes_cpf seja igual ao clienteCpf
        
        setUsers(res.data.filter((conta) => contasAssociadas.includes(conta.numero)));
        
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
        <Title>Contas</Title>
        <Form  onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <TableContas setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default DadosConta;