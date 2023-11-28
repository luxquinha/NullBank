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
      const conta_poupanca = ref.current;

      conta_poupanca.conta_numero.value = onEdit.conta_numero;
      conta_poupanca.taxa_juros.value = onEdit.taxa_juros;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const conta_poupanca = ref.current;

    if (
      !conta_poupanca.conta_numero.value ||
      !conta_poupanca.taxa_juros.value
      
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/conta_poupanca/" + onEdit.conta_numero, {
          
          conta_numero: conta_poupanca.conta_numero.value,
          taxa_juros: conta_poupanca.taxa_juros.value
      
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/conta_poupanca/", {
          conta_numero: conta_poupanca.conta_numero.value,
          taxa_juros: conta_poupanca.taxa_juros.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    conta_poupanca.conta_numero.value = "";
    conta_poupanca.taxa_juros.value = "";
    

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Conta</Label>
        <Input name="conta_numero" />
      </InputArea>
      <InputArea>
        <Label>Limite Credito</Label>
        <Input name="taxa_juros" />
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default Form;