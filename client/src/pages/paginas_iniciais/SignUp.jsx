// Importando bibliotecas e seus componentes:
import React from "react";
import RegisterForm from "../../componentes/clientes/RegisterForm";

export default function SignUp(){
    const fundo = {
        backgroundImage: "url('https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }

    const getDataUser = (data) =>{
        console.log(data);
    }

    const createUser = async (data) => {
        console.log('entrou');
        console.log(data);
        // Cria um cliente no BD:
        // await axios
        // .post("http://localhost:8800/clientes/", {
        //   cpf: data.cpf,
        //   nome_completo: data.name,
        //   rg: data.rg,
        //   orgao_emissor: data.ssp,
        //   uf: data.uf,
        //   data_nascimento: data.birth_date,
        //   tipo_logradouro: data.streetType,
        //   nome_logradouro: data.end,
        //   numero: data.num,
        //   bairro: data.district,
        //   cep: data.zipCode,
        //   cidade: data.city,
        //   estado: data.state,
        // //   senha: data.password
        // })
        // .then(({ message }) => toast.success(message))
        // .catch(({ message }) => toast.error(message));
    };

    return(
        <div className="w-screen h-screen flex flex-row">
            <div className="w-[45%] h-full flex flex-col">
                <div className="w-full h-[60%] bg-zinc-700 p-4 flex items-center justify-center">
                    <h1 className="text-white text-5xl">Com o Nullbank a resposta vem em menos de 1 minuto</h1>
                </div>
                <div style={fundo}
                className="w-full h-[40%] bg-center bg-no-repeat bg-cover"
                >
                    imagem
                </div>
            </div>
            <div className="h-screen w-screen border">
                <RegisterForm title={'insira seu dados'} buttonText={'Confirmar'} sendData={getDataUser}/>
            </div>
        </div>
    )
}