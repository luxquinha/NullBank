import React from "react";
import { Link } from "react-router-dom";

export default function ButtonWithIcon({width, content, icon, route}){
    return(
        <Link to={route}
        className={`w-${width} h-13 rounded-3xl mb-2 p-3 flex flex-row justify-between no-underline text-zinc-200 bg-cyan-900 self-center items-center`}>
            <span className="font-semibold">{content}</span>
            <span>{icon}</span>
        </Link>
    )
}