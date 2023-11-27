import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../icons/icones";

export default function HeaderPages({title, route}){
    return(
        <div className="w-screen h-12 bg-slate-50 flex flex-row items-center justify-between px-2 fixed left-0 right-0 top-0">
            <Link to={route}
            className="no-underline text-center text-2xl text-zinc-500 font-bold cursor-pointer hover:text-cyan-800">NullBank</Link>
            <span className="text-center text-2xl text-zinc-500 font-bold">{title}</span>
            <Link to={'/'} className="no-underline text-sm text-zinc-400 hover:text-zinc-500 hover:font-semibold flex flex-row items-center">
                <span className="mr-[2px]">Logout</span>
                <span>{logOut}</span>
            </Link>
        </div>
    )
}