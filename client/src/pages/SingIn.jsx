import React from "react";
import { Link } from "react-router-dom";
// importando icones:
import { seta } from '../icons/icones'

export default function SingIn(){
    const fundo = {
        backgroundImage: "url('https://media.istockphoto.com/id/1442295199/pt/foto/successful-financier-investor-works-inside-office-at-work-businessman-in-business-suit-uses.jpg?s=1024x1024&w=is&k=20&c=0SNAhOhTTARN8a85GRk9AtNgl5dF0RFK7NvvZhNGEw8=')"
    }
    return(
        <div className="flex flex-row items-center w-full">
            {/*
            <span className="self-center mt-2 text-zinc-500 text-xl font-semibold tracking-widest">LOGIN</span>
             */}
            <div style={fundo}
            className="w-[50%] h-screen bg-left bg-auto"
            >
                <Link to={'/'} className="text-center text-2xl text-zinc-100 font-bold absolute left-3 top-2 no-underline hover:text-cyan-800">NullBank</Link>
            </div>
            <div className="h-screen w-[50%] flex flex-col">
                <div className="w-full h-[80%] flex flex-col p-10 items-center justify-center gap-2">
                    <span className="text-2xl font-semibold">Acesse sua conta</span>
                    <form action="" className="flex flex-col w-[50%] h-[40%]">
                        <span className="self-start text-sm">CPF</span>
                        <input type="text"/>
                        <span className="self-start text-sm">Senha</span>
                        <input type="password"/>
                    </form>
                    <Link to={'###'}
                    className="w-full h-12 rounded-3xl mb-2 p-3 flex flex-row justify-between no-underline text-zinc-200 bg-cyan-900 self-center items-center">
                    <span className="font-semibold">Continuar</span>
                    <span>{seta}</span>
                    </Link>
                </div>
                <div>
                    <Link to={'/signUp'} className="no-underline text-sm text-zinc-400 hover:text-zinc-500 hover:font-semibold">I'm not client</Link>
                </div>
            </div>
        </div>
    )
}