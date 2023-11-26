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

const TableTrans = ({ users, setUsers, setOnEdit }) => {



  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (numero_transacao) => {
    await axios
      .delete("http://localhost:8800/transacoes/" + numero_transacao)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.numero_transacao !== numero_transacao);

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
          <Th>Numero Transacao</Th>
          <Th>Tipo</Th>
          <Th>Data/Hora</Th>
          <Th>Valor</Th>
          <Th>Conta Principal</Th>
          <Th>Conta Transação</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.numero_transacao}</Td>
            <Td width="30%">{item.tipo} </Td>
            <Td width="30%">{format(new Date(item.data_hora), 'yyyy-MM-dd HH:mm:ss')} </Td>
            <Td width="30%">{item.valor} </Td>
            <Td width="30%">{item.conta_principal} </Td>
            <Td width="30%">{item.conta_transacao} </Td>

            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.numero_transacao)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableTrans;
