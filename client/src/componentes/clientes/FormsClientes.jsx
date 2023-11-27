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
  align-items: center;
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
      const clientes = ref.current;

      clientes.cpf.value = onEdit.cpf;
      clientes.nome_completo.value = onEdit.nome_completo;
      clientes.rg.value = onEdit.rg;
      clientes.orgao_emissor.value = onEdit.orgao_emissor;
      clientes.uf.value = onEdit.uf;

       // Formatar a data para o formato YYYY-MM-DD
      const formattedDate = new Date(onEdit.data_nascimento).toISOString().split('T')[0];
      clientes.data_nascimento.value = formattedDate;

      
      clientes.tipo_logradouro.value = onEdit.tipo_logradouro;
      clientes.nome_logradouro.value = onEdit.nome_logradouro;
      clientes.numero.value = onEdit.numero;
      clientes.bairro.value = onEdit.bairro;
      clientes.cep.value = onEdit.cep;
      clientes.cidade.value = onEdit.cidade;
      clientes.estado.value = onEdit.estado;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clientes = ref.current;

    if (
      !clientes.cpf.value ||
      !clientes.nome_completo.value ||
      !clientes.rg.value ||
      !clientes.orgao_emissor.value ||
      !clientes.uf.value ||
      !clientes.data_nascimento.value ||
      !clientes.tipo_logradouro.value ||
      !clientes.nome_logradouro.value ||
      !clientes.numero.value ||
      !clientes.bairro.value ||
      !clientes.cep.value ||
      !clientes.cidade.value ||
      !clientes.estado.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/clientes/" + onEdit.cpf, {
          cpf: clientes.cpf.value,
          nome_completo: clientes.nome_completo.value,
          rg: clientes.rg.value,
          orgao_emissor: clientes.orgao_emissor.value,
          uf: clientes.uf.value,
          data_nascimento: clientes.data_nascimento.value,
          tipo_logradouro: clientes.tipo_logradouro.value,
          nome_logradouro: clientes.nome_logradouro.value,
          numero: clientes.numero.value,
          bairro: clientes.bairro.value,
          cep: clientes.cep.value,
          cidade: clientes.cidade.value,
          estado: clientes.estado.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/clientes/", {
          cpf: clientes.cpf.value,
          nome_completo: clientes.nome_completo.value,
          rg: clientes.rg.value,
          orgao_emissor: clientes.orgao_emissor.value,
          uf: clientes.uf.value,
          data_nascimento: clientes.data_nascimento.value,
          tipo_logradouro: clientes.tipo_logradouro.value,
          nome_logradouro: clientes.nome_logradouro.value,
          numero: clientes.numero.value,
          bairro: clientes.bairro.value,
          cep: clientes.cep.value,
          cidade: clientes.cidade.value,
          estado: clientes.estado.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    clientes.cpf.value = "";
    clientes.nome_completo.value = "";
    clientes.rg.value = "";
    clientes.orgao_emissor.value = "";
    clientes.uf.value = "";
    clientes.data_nascimento.value = "";
    clientes.tipo_logradouro.value = "";
    clientes.nome_logradouro.value = "";
    clientes.numero.value = "";
    clientes.bairro.value = "";
    clientes.cep.value = "";
    clientes.cidade.value = "";
    clientes.estado.value = "";
    

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" />
      </InputArea>
      <InputArea>
        <Label>Nome Completo</Label>
        <Input name="nome_completo" />
      </InputArea>
      <InputArea>
        <Label>RG</Label>
        <Input name="rg" />
      </InputArea>
      <InputArea>
        <Label>Orgão Emissor</Label>
        <Input name="orgao_emissor" />
      </InputArea>
      <InputArea>
        <Label>UF</Label>
        <select name="uf" className="h-10 w-20 outline-none border border-zinc-800 rounded-2">
          <option value={''}></option>
          <option value={'AC'}>AC</option>
          <option value={'AM'}>AM</option>
          <option value={'RO'}>RO</option>
          <option value={'RR'}>RR</option>
          <option value={'PA'}>PA</option>
          <option value={'AP'}>AP</option>
          <option value={'TO'}>TO</option>
          <option value={'MA'}>MA</option>
          <option value={'PI'}>PI</option>
          <option value={'CE'}>CE</option>
          <option value={'RN'}>RN</option>
          <option value={'PB'}>PB</option>
          <option value={'PE'}>PE</option>
          <option value={'AL'}>AL</option>
          <option value={'SE'}>SE</option>
          <option value={'BA'}>BA</option>
          <option value={'MG'}>MG</option>
          <option value={'ES'}>ES</option>
          <option value={'RJ'}>RJ</option>
          <option value={'SP'}>SP</option>
          <option value={'PR'}>PR</option>
          <option value={'SC'}>SC</option>
          <option value={'RS'}>RS</option>
          <option value={'MS'}>MS</option>
          <option value={'MT'}>MT</option>
          <option value={'GO'}>GO</option>
          <option value={'DF'}>DF</option>
        </select>
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" />
      </InputArea>
      <InputArea>
        <Label>Tipo de Logradouro</Label>
        <Input name="tipo_logradouro" />
      </InputArea>
      <InputArea>
        <Label>Nome do Logradouro</Label>
        <Input name="nome_logradouro" />
      </InputArea>
      <InputArea>
        <Label>Número</Label>
        <Input name="numero" />
      </InputArea>
      <InputArea>
        <Label>Bairro</Label>
        <Input name="bairro" />
      </InputArea>
      <InputArea>
        <Label>CEP</Label>
        <Input name="cep" />
      </InputArea>
      <InputArea>
        <Label>Cidade</Label>
        <Input name="cidade" />
      </InputArea>
      <InputArea>
        <Label>Estado</Label>
        <Input name="estado" />
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default Form;