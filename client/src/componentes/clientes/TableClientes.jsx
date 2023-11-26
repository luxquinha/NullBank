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

const TableClientes = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (cpf) => {
    await axios
      .delete("http://localhost:8800/clientes/" + cpf)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.cpf !== cpf);
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
          <Th>CPF</Th>
          <Th>Nome Completo</Th>
          <Th>RG</Th>
          <Th>Orgão Emissor</Th>
          <Th>UF</Th>
          <Th>Data Nascimento</Th>
          <Th>Tipo Logradouro</Th>
          <Th>Nome Logradouro</Th>
          <Th>Número</Th>
          <Th>Bairro</Th>
          <Th>CEP</Th>
          <Th>Cidade</Th>
          <Th>Estado</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="10%">{item.cpf}</Td>
            <Td width="15%">{item.nome_completo}</Td>
            <Td width="10%">{item.rg}</Td>
            <Td width="10%">{item.orgao_emissor}</Td>
            <Td width="5%">{item.uf}</Td>
            <Td width="10%">{format(new Date(item.data_nascimento), 'yyyy-MM-dd')}</Td>
            <Td width="5%">{item.tipo_logradouro}</Td>
            <Td width="15%">{item.nome_logradouro}</Td>
            <Td width="5%">{item.numero}</Td>
            <Td width="10%">{item.bairro}</Td>
            <Td width="10%">{item.cep}</Td>
            <Td width="10%">{item.cidade}</Td>
            <Td width="5%">{item.estado}</Td>

            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.cpf)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableClientes;
