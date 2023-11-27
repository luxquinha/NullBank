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

const TableEmails = ({ users, setUsers, setOnEdit }) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (email) => {
    await axios
      .delete("http://localhost:8800/emails/" + email)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.email !== email);

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
          <th className="table-light">Email</th>
          <th className="table-light">Tipo</th>
          <th className="table-light">Cliente</th>
          <th className="table-light"></th>
          <th className="table-light"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr className="table-light" key={i}>
            <td className="table-light">{item.email}</td>
            <td className="table-light">{item.tipo_email} </td>
            <td className="table-light">{item.clientes_cpf} </td>

            <td className="table-light cursor-pointer hover:text-cyan-600"><FaEdit onClick={() => handleEdit(item)} /></td>
            <td className="table-light cursor-pointer hover:text-red-600"><FaTrash onClick={() => handleDelete(item.email)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableEmails;
