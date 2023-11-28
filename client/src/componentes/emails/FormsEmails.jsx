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
      const emails = ref.current;

      emails.email.value = onEdit.email;
      emails.tipo_email.value = onEdit.tipo_email;
      emails.clientes_cpf.value = onEdit.clientes_cpf;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emails = ref.current;

    if (
      !emails.email.value  ||
      !emails.tipo_email.value  ||
      !emails.clientes_cpf.value
      
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/emails/" + onEdit.email, {
          email: emails.email.value,
          tipo_email: emails.tipo_email.value,
          clientes_cpf: emails.clientes_cpf.value,
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/emails/", {
          email: emails.email.value,
          tipo_email: emails.tipo_email.value,
          clientes_cpf: emails.clientes_cpf.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }


    emails.email.value = "";
    emails.tipo_email.value = "";
    emails.clientes_cpf.value = "";
    

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Email</Label>
        <Input name="email" />
      </InputArea>
      <InputArea>
        <Label>Tipo</Label>
        <select name="tipo_email" className="h-10 w-28 outline-none border border-zinc-800 rounded-2">
          <option value={''}></option>
          <option value={'Pessoal'}>Pessoal</option>
          <option value={'Comercial'}>Comercial</option>
        </select>
      </InputArea>
      <InputArea>
        <Label>Clientes</Label>
        <Input name="clientes_cpf"/>
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default Form;