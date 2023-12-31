import styled from "styled-components";
import Form from "./FormsAgency";
import TableAgency from "./TableAgency";
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
// const Title = styled.h2``;

function Agency() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => {
      getUsers();
    }, [setUsers]);

  return (
    <div className="">
      <Container>
        {/* <Title>AGÊNCIAS</Title> */}
        <Form  onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <TableAgency setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </div>
  );
}

export default Agency;