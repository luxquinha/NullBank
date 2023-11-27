import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import ButtonFormTable from '../ButtonFormTables'

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
      const dependente = ref.current;
      dependente.nome_completo.value = onEdit.nome_completo;
       // Formatar a data para o formato YYYY-MM-DD
      const formattedDate = new Date(onEdit.data_nascimento).toISOString().split('T')[0];
      dependente.data_nascimento.value = formattedDate;
      dependente.parentesco.value = onEdit.parentesco;
      dependente.idade.value = onEdit.idade;
      dependente.funcionarios_mat.value = onEdit.funcionarios_mat;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dependente = ref.current;

    if (
      !dependente.nome_completo.value ||
      !dependente.data_nascimento.value ||
      !dependente.parentesco.value ||
      !dependente.idade.value ||
      !dependente.funcionarios_mat.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/dependentes/" + onEdit.nome_completo, {
          nome_completo: dependente.nome_completo.value,
          data_nascimento: dependente.data_nascimento.value,
          parentesco: dependente.parentesco.value,
          idade: dependente.idade.value,
          funcionarios_mat: dependente.funcionarios_mat.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/dependentes/", {
          nome_completo: dependente.nome_completo.value,
          data_nascimento: dependente.data_nascimento.value,
          parentesco: dependente.parentesco.value,
          idade: dependente.idade.value,
          funcionarios_mat: dependente.funcionarios_mat.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    dependente.nome_completo.value = "";
    dependente.data_nascimento.value = "";
    dependente.parentesco.value = "";
    dependente.idade.value = "";
    dependente.funcionarios_mat.value = "";
    

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome Completo</Label>
        <Input name="nome_completo" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" />
      </InputArea>
      <InputArea>
        <Label>Parentesco</Label>
        <select name="parentesco" className="h-10 w-28 outline-none border border-zinc-800 rounded-2">
          <option value={''}></option>
          <option value={'Filho(a)'}>Filho(a)</option>
          <option value={'Conjulge'}>Conjulge</option>
          <option value={'Genitor(a)'}>Genitor(a)</option>
        </select>
      </InputArea>
      <InputArea>
        <Label>Idade</Label>
        <Input name="idade" />
      </InputArea>
      <InputArea>
        <Label>Funcionário</Label>
        <Input name="funcionarios_mat" />
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default Form;