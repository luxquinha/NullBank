import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { format } from 'date-fns';



const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  white-space: nowrap;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const TableDependente = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (nome_completo) => {
    await axios
      .delete("http://localhost:8800/dependentes/" + nome_completo)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.nome_completo !== nome_completo);
        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome Completo</Th>
          <Th>Data Nascimento</Th>
          <Th>Parentesco</Th>
          <Th>Idade</Th>
          <Th>Funcionário</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="15%">{item.nome_completo}</Td>
            <Td width="10%">{format(new Date(item.data_nascimento), 'yyyy-MM-dd')}</Td>
            <Td width="5%">{item.parentesco}</Td>
            <Td width="15%">{item.idade}</Td>
            <Td width="5%">{item.funcionarios_mat}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.nome_completo)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableDependente;
