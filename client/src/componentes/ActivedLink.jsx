import React from "react";
import { Link, useHref } from "react-router-dom";
import useLoginContext from "../hooks/useLoginContext";

export default function ActivedLink({route, label, type}){
    const pathName = useHref()
    const { getTypeTrans } = useLoginContext()
    const isActived = pathName === route
    
    const handleClick = ()=>{
        if(type !== undefined){
            getTypeTrans(type)
        }
    }

    return(
        <Link to={route} onClick={handleClick}
        className={`no-underline font-bold tracking-widest text-md rounded-2 w-40 text-center h-10 flex items-center justify-center hover:bg-cyan-500 hover:text-white
        ${isActived ? 'bg-cyan-600 text-white': 'text-zinc-600'}`}>
            {label}
        </Link>
    )
}