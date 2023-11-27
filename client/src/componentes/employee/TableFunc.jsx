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

    <table className="table table-striped text-center">
      <thead className="sticky top-12">
        <tr className="table-light align-middle">
          <th className="table-light">Matrícula</th>
          <th className="table-light">Nome</th>
          <th className="table-light">Endereço</th>
          <th className="table-light">Cidade</th>
          <th className="table-light">Cargo</th>
          <th className="table-light">Sexo</th>
          <th className="table-light">Data Nascimento</th>
          <th className="table-light">Salario</th>
          <th className="table-light">Agencia</th>
          <th className="table-light">Senha</th>
          <th className="table-light"></th>
          <th className="table-light"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr key={i} className="table-light align-middle">
            <td className="table-light">{item.mat}</td>
            <td className="table-light">{item.nome_completo} </td>
            <td className="table-light">{item.endereco} </td>
            <td className="table-light">{item.cidade} </td>
            <td className="table-light">{item.cargo} </td>
            <td className="table-light">{item.sexo} </td>
            <td className="table-light">{format(new Date(item.data_nascimento), 'yyyy-MM-dd')}</td>
            <td className="table-light">{item.salario} </td>
            <td className="table-light">{item.agencia} </td>
            <td className="table-light">{item.senha} </td>

            <td className="table-light cursor-pointer hover:text-cyan-600"><FaEdit onClick={() => handleEdit(item)} /></td>
            <td className="table-light cursor-pointer hover:text-red-600"><FaTrash onClick={() => handleDelete(item.mat)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableFunc;
