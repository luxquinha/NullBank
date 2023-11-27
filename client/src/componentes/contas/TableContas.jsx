import React from "react";
import axios from "axios";
// import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";



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

const TableContas = ({ users, setUsers, setOnEdit }) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (numero) => {
    await axios
      .delete("http://localhost:8800/contas/" + numero)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.numero !== numero);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <table className="table table-striped text-center">
      <thead className="sticky top-12">
        <tr className="table-light">
          <th className="table-light">Numero</th>
          <th className="table-light">Saldo</th>
          <th className="table-light">Senha</th>
          <th className="table-light">Número Agência</th>
          <th className="table-light">Gerente</th>
          <th className="table-light"></th>
          <th className="table-light"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr className="table-light" key={i}>
            <td className="table-light">{item.numero}</td>
            <td className="table-light">{item.saldo} </td>
            <td className="table-light">{item.senha} </td>
            <td className="table-light">{item.num_agencia} </td>
            <td className="table-light">{item.gerente_mat} </td>

            <td className="table-light cursor-pointer hover:text-cyan-600"><FaEdit onClick={() => handleEdit(item)} /></td>
            <td className="table-light cursor-pointer hover:text-red-600"><FaTrash onClick={() => handleDelete(item.numero)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContas;
