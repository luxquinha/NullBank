import React from "react";
import ActivedLink from "./ActivedLink";
import { Link } from "react-router-dom";
import { userIcon } from "../icons/icones";
// Saque | Depósito | Pagamentp | Tranf | Extrato (Empréstimo)
export default function SideBarClient(){
    return(
        <div className="w-[14vw] h-[100vh] shadow-xl flex flex-col items-center justify-around fixed bottom-0 top-0 left-0">
            <div className="w-[14vw] h-[20vh] flex flex-col items-center justify-center">
                <Link to={'/home/perfil'} className="w-[8vw] h-[8vw] no-underline rounded-2xl flex flex-col items-center justify-center">
                    <span className="w-[6vw] h-[6vw] border-2 border-cyan-600 text-cyan-600 rounded-full flex items-center justify-center">{userIcon}</span>
                    <span className="font-bold tracking-widest text-cyan-600">Perfil</span>
                </Link>
            </div>
            <div className="w-[14vw] h-[80vh] flex flex-col items-center justify-around ">
                <ActivedLink route={"/home/conta"} label={'Sua Conta'}/> 
                <ActivedLink route={"/home/extrato"} label={'Ver Extrato'}/> 
                <ActivedLink route={"/home/saque"} label={'Saque'}/>
                <ActivedLink route={"/home/deposito"} label={'Depósito'}/>
                <ActivedLink route={"/home/pagamento"} label={'Pagamento'}/>
                <ActivedLink route={"/home/transferencia"} label={'Transferência'}/>
            </div>
        </div>
    )
}