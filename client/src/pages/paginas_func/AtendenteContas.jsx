
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import GlobalStyle from "../../styles/global";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";



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

function AtendenteConta() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const matriculaAtendente = '00006';

        // Fetch funcionarios data
        const funcionariosResponse = await axios.get("http://localhost:8800/func/");
        const funcionariosData = funcionariosResponse.data;

        // Fetch contas data
        const contasResponse = await axios.get("http://localhost:8800/contas/");
        const contasData = contasResponse.data;

        // Find the funcionario with the specified matriculaAtendente
        const atendente = funcionariosData.find(funcionario => funcionario.mat === matriculaAtendente);

        
        // Filter contas based on num_agencia matching agencia of the atendente
        const contasDoAtendente = contasData.filter(conta => conta.num_agencia === atendente.agencia);

        // Now contasDoAtendente contains all accounts with the same agencia as the atendente
        setUsers(contasDoAtendente);
        
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
        <Title>Atendente - Contas</Title>
        <table className="table table-striped text-center">
      <thead className="sticky top-12">
        <tr className="table-light">
          <th className="table-light">Numero</th>
          <th className="table-light">Saldo</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr className="table-light" key={i}>
            <td className="table-light">{item.numero}</td>
            <td className="table-light">{item.saldo} </td>

          </tr>
        ))}
      </tbody>
    </table>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default AtendenteConta;