
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RegisterForm from "../../componentes/clientes/RegisterForm";

function DadosGerente() {
    const [func, setFunc] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const userStored = JSON.parse(localStorage.getItem('UserData'))
        const funcionarioMat = userStored.key
        const res = await axios.get("http://localhost:8800/func");
        let user = res.data
        setFunc(user.filter((func) => func.mat === funcionarioMat));
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => {
      getUsers();
    }, []); 
  return (
    <>
      <RegisterForm title={'Seu Perfil'} buttonText={'Editar'} users={func} logoutText={'Logout'}/>
    </>
  );
}

export default DadosGerente;