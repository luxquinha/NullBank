import React from "react";
// import { Link } from "react-router-dom";

export default function ButtonWithIcon({width, content, icon,}){
    return(
        <button 
        type="submit"
        className={`w-${width} h-13 rounded-3xl mb-1 p-3 flex flex-row justify-between no-underline items-center self-center 
        text-zinc-200 bg-cyan-900`}
        >
            <span className="font-semibold">{content}</span>
            <span>{icon}</span>
        </button>
    )
}