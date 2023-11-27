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
  width: 100%;
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

const Form = ({ getUsers, onEdit, setOnEdit }) => {

  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const agency = ref.current;

      agency.numero.value = onEdit.numero;
      agency.nome.value = onEdit.nome;
      agency.salario_total_montante.value = onEdit.salario_total_montante;
      agency.cidade.value = onEdit.cidade;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const agency = ref.current;

    if (
      !agency.numero.value ||
      !agency.nome.value ||
      !agency.salario_total_montante.value ||
      !agency.cidade.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.numero, {
          numero: agency.numero.value,
          nome: agency.nome.value,
          salario_total_montante: agency.salario_total_montante.value,
          cidade: agency.cidade.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          numero: agency.numero.value,
          nome: agency.nome.value,
          salario_total_montante: agency.salario_total_montante.value,
          cidade: agency.cidade.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    agency.numero.value = "";
    agency.nome.value = "";
    agency.salario_total_montante.value= "";
    agency.cidade.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
      <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
          <Label>Numero</Label>
          <Input name="numero" />
        </InputArea>
        <InputArea>
          <Label>Nome</Label>
          <Input name="nome" />
        </InputArea>
        <InputArea>
          <Label>Salario Montante</Label>
          <Input name="salario_total_montante" />
        </InputArea>
        <InputArea>
          <Label>Cidade</Label>
          <Input name="cidade"/>
        </InputArea>
        <ButtonFormTable/>
      </FormContainer>
  );
};

export default Form;