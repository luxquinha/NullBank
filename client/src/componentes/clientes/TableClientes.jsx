import React from "react";
import axios from "axios";
// import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { format } from 'date-fns';



// const Table = styled.table`
//   width: 100%;
//   background-color: #fff;
//   padding: 20px;
//   box-shadow: 0px 0px 5px #ccc;
//   border-radius: 5px;
//   max-width: 1120px;
//   margin: 20px auto;
//   word-break: break-all;
// `;

// export const Thead = styled.thead``;

// export const Tbody = styled.tbody``;

// export const Tr = styled.tr`
//   display: flex;
//   justify-content: space-between;
// `;

// export const Th = styled.th`
//   text-align: start;
//   border-bottom: inset;
//   padding-bottom: 5px;

//   @media (max-width: 500px) {
//     ${(props) => props.onlyWeb && "display: none"}
//   }
// `;

// export const Td = styled.td`
//   padding-top: 15px;
//   padding-left: 10px;
//   padding-right: 10px;
//   white-space: nowrap;
//   text-align: ${(props) => (props.alignCenter ? "center" : "start")};
//   width: ${(props) => (props.width ? props.width : "auto")};

//   @media (max-width: 500px) {
//     ${(props) => props.onlyWeb && "display: none"}
//   }
// `;

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
    <table className="table table-striped text-center">
      <thead className="text-sm sticky top-12">
        <tr className="table-light align-middle">
          <th className="table-light">CPF</th>
          <th className="table-light">Nome Completo</th>
          <th className="table-light">RG</th>
          <th className="table-light">Orgão Emissor</th>
          <th className="table-light">UF</th>
          <th className="table-light">Data Nascimento</th>
          <th className="table-light">Tipo Logradouro</th>
          <th className="table-light">Nome Logradouro</th>
          <th className="table-light">Número</th>
          <th className="table-light">Bairro</th>
          <th className="table-light">CEP</th>
          <th className="table-light">Cidade</th>
          <th className="table-light">Estado</th>
          <th className="table-light"></th>
          <th className="table-light"></th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {users.map((item, i) => (
          <tr key={i} className="table-light align-middle">
            <td className="table-light">{item.cpf}</td>
            <td className="table-light">{item.nome_completo}</td>
            <td className="table-light">{item.rg}</td>
            <td className="table-light">{item.orgao_emissor}</td>
            <td className="table-light">{item.uf}</td>
            <td className="table-light">{format(new Date(item.data_nascimento), 'yyyy-MM-dd')}</td>
            <td className="table-light">{item.tipo_logradouro}</td>
            <td className="table-light">{item.nome_logradouro}</td>
            <td className="table-light">{item.numero}</td>
            <td className="table-light">{item.bairro}</td>
            <td className="table-light">{item.cep}</td>
            <td className="table-light">{item.cidade}</td>
            <td className="table-light">{item.estado}</td>

            <td className="table-light cursor-pointer hover:text-cyan-600"><FaEdit onClick={() => handleEdit(item)} /></td>
            <td className="table-light cursor-pointer hover:text-red-600"><FaTrash onClick={() => handleDelete(item.cpf)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableClientes;
