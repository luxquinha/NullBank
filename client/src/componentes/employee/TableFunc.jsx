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

const TableFunc = ({ users, setUsers, setOnEdit }) => {



  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (mat) => {
    await axios
      .delete("http://localhost:8800/func/" + mat)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.mat !== mat);

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
          <Th>Matrícula</Th>
          <Th>Nome</Th>
          <Th>Endereço</Th>
          <Th>Cidade</Th>
          <Th>Cargo</Th>
          <Th>Sexo</Th>
          <Th>Data Nascimento</Th>
          <Th>Salario</Th>
          <Th>Agencia</Th>
          <Th>Senha</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.mat}</Td>
            <Td width="30%">{item.nome_completo} </Td>
            <Td width="30%">{item.endereco} </Td>
            <Td width="30%">{item.cidade} </Td>
            <Td width="30%">{item.cargo} </Td>
            <Td width="30%">{item.sexo} </Td>
            <Td width="30%">{format(new Date(item.data_nascimento), 'yyyy-MM-dd')}</Td>
            <Td width="30%">{item.salario} </Td>
            <Td width="30%">{item.agencia} </Td>
            <Td width="30%">{item.senha} </Td>

            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.mat)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableFunc;
