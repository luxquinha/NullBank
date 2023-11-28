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
      const transacoes = ref.current;

      transacoes.numero_transacao.value = onEdit.numero_transacao;
      transacoes.tipo.value = onEdit.tipo;
      
      const formattedDateTime = new Date(onEdit.data_hora).toISOString().replace(/T/, ' ').replace(/\..+/, '');
      transacoes.data_hora.value = formattedDateTime;

      transacoes.valor.value = onEdit.valor;
      transacoes.conta_principal.value = onEdit.conta_principal;
      transacoes.conta_transacao.value = onEdit.conta_transacao;
      
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transacoes = ref.current;

    if (
      !transacoes.numero_transacao.value  ||
      !transacoes.tipo.value  ||
      !transacoes.data_hora.value ||
      !transacoes.valor.value ||
      !transacoes.conta_principal.value ||
      !transacoes.conta_transacao.value
      
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/transacoes/" + onEdit.numero_transacao, {
          numero_transacao: transacoes.numero_transacao.value,
          tipo: transacoes.tipo.value,
          data_hora: transacoes.data_hora.value,
          valor: transacoes.valor.value,
          conta_principal: transacoes.conta_principal.value,
          conta_transacao: transacoes.conta_transacao.value,
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/transacoes/", {
          numero_transacao: transacoes.numero_transacao.value,
          tipo: transacoes.tipo.value,
          data_hora: transacoes.data_hora.value,
          valor: transacoes.valor.value,
          conta_principal: transacoes.conta_principal.value,
          conta_transacao: transacoes.conta_transacao.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }


    transacoes.numero_transacao.value = "";
    transacoes.tipo.value = "";
    transacoes.data_hora.value = "";
    transacoes.valor.value = "";
    transacoes.conta_principal.value = "";
    transacoes.conta_transacao.value = "";
    

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Número</Label>
        <Input name="numero_transacao" />
      </InputArea>
      <InputArea>
        <Label>Tipo</Label>
        <select name="tipo" className="h-10 w-28 outline-none border border-zinc-800 rounded-2">
          <option value={''}></option>
          <option value={'Transferência'}>Transferência</option>
          <option value={'Estorno'}>Estorno</option>
          <option value={'Pagamento'}>Pagamento</option>
          <option value={'Saque'}>Saque</option>
        </select>
      </InputArea>
      <InputArea>
        <Label>Data Hora</Label>
        <Input name="data_hora" />
      </InputArea>
      <InputArea>
        <Label>Valor</Label>
        <Input name="valor"/>
      </InputArea>
      <InputArea>
        <Label>Conta Principal</Label>
        <Input name="conta_principal"/>
      </InputArea>
      <InputArea>
        <Label>Conta Transacao</Label>
        <Input name="conta_transacao"/>
      </InputArea>
      <ButtonFormTable/>
    </FormContainer>
  );
};

export default Form;