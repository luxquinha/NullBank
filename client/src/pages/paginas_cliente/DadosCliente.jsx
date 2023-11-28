
import styled from "styled-components";

import Form from "../../componentes/clientes/FormsClientes";
import TableClientes from "../../componentes/clientes/TableClientes";
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

function DadosCliente() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/clientes/");
        const clienteCpf = '12345678901';

        setUsers(res.data.filter((cliente) => cliente.cpf === clienteCpf));
        
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
        <Title>Dados Cliente</Title>
        <Form  onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <TableClientes setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default DadosCliente;