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

const Form = ({ getUsers, onEdit, setOnEdit }) => {

  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const contas = ref.current;

      contas.numero.value = onEdit.numero;
      contas.saldo.value = onEdit.saldo;
      contas.senha.value = onEdit.senha;
      contas.num_agencia.value = onEdit.num_agencia;
      contas.gerente_mat.value = onEdit.gerente_mat;
      
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contas = ref.current;

    if (
      !contas.numero.value  ||
      !contas.saldo.value  ||
      !contas.senha.value ||
      !contas.num_agencia.value ||
      !contas.gerente_mat.value
      
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/contas/" + onEdit.numero, {
          numero: contas.numero.value,
          saldo: contas.saldo.value,
          senha: contas.senha.value,
          num_agencia: contas.num_agencia.value,
          gerente_mat: contas.gerente_mat.value,
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/contas/", {
          numero: contas.numero.value,
          saldo: contas.saldo.value,
          senha: contas.senha.value,
          num_agencia: contas.num_agencia.value,
          gerente_mat: contas.gerente_mat.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }


    contas.numero.value = "";
    contas.saldo.value = "";
    contas.senha.value = "";
    contas.num_agencia.value = "";
    contas.gerente_mat.value = "";
    

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Número</Label>
        <Input name="numero" />
      </InputArea>
      <InputArea>
        <Label>Saldo</Label>
        <Input name="saldo" />
      </InputArea>
      <InputArea>
        <Label>Senha</Label>
        <Input name="senha"/>
      </InputArea>
      <InputArea>
        <Label>Agênciaaa</Label>
        <Input name="num_agencia"/>
      </InputArea>
      <InputArea>
        <Label>Gerente</Label>
        <Input name="gerente_mat"/>
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default Form;