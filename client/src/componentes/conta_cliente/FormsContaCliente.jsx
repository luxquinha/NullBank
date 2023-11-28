import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import ButtonFormTable from "../ButtonFormTables";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

// const Button = styled.button`
//   padding: 10px;
//   cursor: pointer;
//   border-radius: 5px;
//   border: none;
//   background-color: #2c73d2;
//   color: white;
//   height: 42px;
// `;

const FormsContaCliente = ({ getUsers, onEdit, setOnEdit }) => {

  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const conta_cliente = ref.current;

      conta_cliente.clientes_cpf.value = onEdit.clientes_cpf;
      conta_cliente.contas_numero.value = onEdit.contas_numero;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const conta_cliente = ref.current;

    if (
      !conta_cliente.clientes_cpf.value ||
      !conta_cliente.contas_numero.value
      
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/conta_cliente/" + onEdit.clientes_cpf + "/" + onEdit.conta_cliente, {
          
          clientes_cpf: conta_cliente.clientes_cpf.value,
          contas_numero: conta_cliente.contas_numero.value
      
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/conta_cliente/", {
          clientes_cpf: conta_cliente.clientes_cpf.value,
          contas_numero: conta_cliente.contas_numero.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    conta_cliente.clientes_cpf.value = "";
    conta_cliente.contas_numero.value = "";
    

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Cliente</Label>
        <Input name="clientes_cpf" />
      </InputArea>
      <InputArea>
        <Label>Conta</Label>
        <Input name="contas_numero" />
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default FormsContaCliente;