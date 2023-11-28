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
      const telefones = ref.current;

      telefones.telefone.value = onEdit.telefone;
      telefones.tipo_telefone.value = onEdit.tipo_telefone;
      telefones.cliente_cpf.value = onEdit.cliente_cpf;
     
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telefones = ref.current;

    if (
      !telefones.telefone.value  ||
      !telefones.tipo_telefone.value  ||
      !telefones.cliente_cpf.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/telefones/" + onEdit.telefone, {
          telefone: telefones.telefone.value,
          tipo_telefone: telefones.tipo_telefone.value,
          cliente_cpf: telefones.cliente_cpf.value,
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/telefones/", {
          telefone: telefones.telefone.value,
          tipo_telefone: telefones.tipo_telefone.value,
          cliente_cpf: telefones.cliente_cpf.value,

        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }


    telefones.telefone.value = "";
    telefones.tipo_telefone.value = "";
    telefones.cliente_cpf.value = "";   

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" />
      </InputArea>
      <InputArea>
        <Label>Tipo</Label>
        <select name="tipo_telefone" className="h-10 w-28 outline-none border border-zinc-800 rounded-2">
          <option value={''}></option>
          <option value={'Pessoal'}>Pessoal</option>
          <option value={'Fixo'}>Fixo</option>
          <option value={'Comercial'}>Comercial</option>
        </select>
      </InputArea>
      <InputArea>
        <Label>Cliente</Label>
        <Input name="cliente_cpf"/>
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default Form;