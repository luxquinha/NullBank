import React from "react";
import ActivedLink from "./ActivedLink";

export default function SideBarAdmin(){
    return(
        <div className="w-[14vw] h-[92.3vh] shadow-xl flex flex-col items-center justify-around fixed bottom-0 top-12 left-0">
            <ActivedLink route={"/admin/agency"} label={'Agências'}/>
            <ActivedLink route={"/admin/func"} label={'Funcionários'}/>
            <ActivedLink route={"/admin/dependentes"} label={'Dependentes'}/>
            <ActivedLink route={"/admin/clientes"} label={'Clientes'}/>
            <ActivedLink route={"/admin/contas"} label={'Contas'}/>
            <ActivedLink route={"/admin/transacoes"} label={'Transações'}/>
            <ActivedLink route={"/admin/telefones"} label={'Telefones'}/>
            <ActivedLink route={"/admin/emails"} label={'Emails'}/>
            <ActivedLink route={"/admin/conta_cliente"} label={'Contas/Clientes'}/>
            <ActivedLink route={"/admin/conta_corrente"} label={'Conta Corrente'}/>
            <ActivedLink route={"/admin/conta_especial"} label={'Conta Especial'}/>
            <ActivedLink label={'Conta Poupança'} route={"/admin/conta_poupanca"}/>
        </div>
    )
}