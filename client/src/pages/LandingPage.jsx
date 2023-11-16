import React from "react";
import Header from "../componentes/Header";
import { Link } from "react-router-dom";
// importando icones:
import { seta } from "../icons/icones";

export default function LandingPage(){
    const fundo = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2014/02/01/18/00/money-256315_1280.jpg')",
    }
    return (
        <div className="w-screen h-screen">
          <Header/>
          <div style={fundo} className="w-screen h-[92.6vh] bg-no-repeat bg-cover bg-bottom bg-fixed flex flex-row items-center justify-center"> 
            <div className="w-[65%] h-full flex flex-col items-center justify-center gap-5 text-white">
                <h2 className="text-5xl tracking-wide font-semibold w-[80%] h-[20%] text-start">Tenha N Possibilidades de produtos para N Possibilidades na vida</h2>
                <span className="text-2xl font-medium text-start tracking-wide w-[80%] h-[10%]">O que você precisa pra ficar no controle da sua vida financeira tem no app do Nullbank.</span>
            </div>
            <div className="h-[50%] w-[24%] bg-zinc-100 rounded-4 p-6 flex flex-col justify-between">
                <span className="text-2xl font-semibold">Peça sua conta e cartão de crédito do Nullbank</span>
                <input type="text" 
                placeholder="Digite seu CPF" 
                className="w-full p-2 outline-none text-sm border-solid border-bottom border-bottom-2 border-zinc-400 hover:border-black bg-transparent self-center "/>
                <Link to={'/signUp'}
                className="w-full h-12 rounded-3xl mb-2 p-3 flex flex-row justify-between no-underline text-zinc-200 bg-cyan-900 self-center items-center">
                    <span className="font-semibold">Continuar</span>
                    <span>{seta}</span>
                    </Link>
            </div>
          </div>
        </div>
      );
}