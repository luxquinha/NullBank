import React from "react";
import { Link, useHref } from "react-router-dom";

export default function ActivedLink({route, label}){
    const pathName = useHref()
    const isActived = pathName === route

    return(
        <Link to={route}
        className={`no-underline font-bold tracking-widest text-md rounded-2 w-40 text-center h-10 flex items-center justify-center hover:bg-cyan-500 hover:text-white
        ${isActived ? 'bg-cyan-600 text-white': 'text-zinc-600'}`}>
            {label}
        </Link>
    )
}