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
      const func = ref.current;

      func.mat.value = onEdit.mat;
      func.nome_completo.value = onEdit.nome_completo;
      func.endereco.value = onEdit.endereco;
      func.cidade.value = onEdit.cidade;
      func.cargo.value = onEdit.cargo;
      func.sexo.value = onEdit.sexo;
      
      // Formatar a data para o formato YYYY-MM-DD
      const formattedDate = new Date(onEdit.data_nascimento).toISOString().split('T')[0];
      func.data_nascimento.value = formattedDate;

      func.salario.value = onEdit.salario;
      func.agencia.value = onEdit.agencia;
      func.senha.value = onEdit.senha;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const func = ref.current;

    if (
      !func.mat.value  ||
      !func.nome_completo.value  ||
      !func.endereco.value ||
      !func.cidade.value ||
      !func.cargo.value ||
      !func.sexo.value ||
      !func.data_nascimento.value ||
      !func.salario.value ||
      !func.agencia.value ||
      !func.senha.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/func/" + onEdit.mat, {
          mat: func.mat.value,
          nome_completo: func.nome_completo.value,
          endereco: func.endereco.value,
          cidade: func.cidade.value,
          cargo: func.cargo.value,
          sexo: func.sexo.value,
          data_nascimento: func.data_nascimento.value,
          salario: func.salario.value,
          agencia: func.agencia.value,
          senha: func.senha.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/func/", {
          mat: func.mat.value,
          nome_completo: func.nome_completo.value,
          endereco: func.endereco.value,
          cidade: func.cidade.value,
          cargo: func.cargo.value,
          sexo: func.sexo.value,
          data_nascimento: func.data_nascimento.value,
          salario: func.salario.value,
          agencia: func.agencia.value,
          senha: func.senha.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }


    func.mat.value = "";
    func.nome_completo.value = "";
    func.endereco.value = "";
    func.cidade.value = "";
    func.cargo.value = "";
    func.sexo.value = "";
    func.data_nascimento.value = "";
    func.salario.value = "";
    func.agencia.value = "";
    func.senha.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Matrícula</Label>
        <Input name="mat" />
      </InputArea>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome_completo" />
      </InputArea>
      <InputArea>
        <Label>Endereco</Label>
        <Input name="endereco" />
      </InputArea>
      <InputArea>
        <Label>Cidade</Label>
        <Input name="cidade"/>
      </InputArea>
      <InputArea>
        <Label>Cargo</Label>
        <Input name="cargo"/>
      </InputArea>
      <InputArea>
        <Label>Sexo</Label>
        <select name="sexo" className="h-10 w-28 outline-none border border-zinc-800 rounded-2">
          <option value={''}></option>
          <option value={'M'}>Masculino</option>
          <option value={'F'}>Feminino</option>
        </select>
      </InputArea>
      <InputArea>
        <Label>Data Nascimento</Label>
        <Input name="data_nascimento"/>
      </InputArea>
      <InputArea>
        <Label>Salario</Label>
        <Input name="salario"/>
      </InputArea>
      <InputArea>
        <Label>Agencia</Label>
        <Input name="agencia"/>
      </InputArea>
      <InputArea>
        <Label>Senha</Label>
        <Input name="senha"/>
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default Form;