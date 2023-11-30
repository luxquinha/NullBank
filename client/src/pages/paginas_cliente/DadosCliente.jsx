
import styled from "styled-components";

import Form from "../../componentes/clientes/FormsClientes";
import TableClientes from "../../componentes/clientes/TableClientes";
import { toast, ToastContainer } from "react-toastify";
import GlobalStyle from "../../styles/global";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import RegisterForm from "../../componentes/clientes/RegisterForm";


// const Container = styled.div`
//   width: auto;
//   max-width: 800px;
//   margin-top: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `;

// const Title = styled.h2``;

function DadosCliente() {
    const dadosNome = useRef('')
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
    let senha
  
    const getUsers = async () => {
      try {
        const userStored = JSON.parse(localStorage.getItem('UserData'))
        const clienteCpf = userStored.key
        const res = await axios.get("http://localhost:8800/clientes");
        let user = res.data
        setUsers(user.filter((cliente) => cliente.cpf === clienteCpf));
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => {
      getUsers();
      if(localStorage.getItem('UserData') !== undefined){
        let userStored = JSON.parse(localStorage.getItem('UserData'))
        senha = userStored.senha
      }
    }, []); 
  return (
    <>
      <RegisterForm title={'Seu Perfil'} buttonText={'Editar'} users={users} senha={senha} logoutText={'Logout'}/>
      {/* <Container>
        <Title>Dados Cliente</Title>
        <Form  onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <TableClientes setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle /> */}
    </>
  );
}

export default DadosCliente;