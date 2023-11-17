import React from "react";

export default function InputBorderBottom({width, placeholder}){
    return(
        <input type="text" 
                placeholder={placeholder} 
                className={`w-${width} p-2 outline-none text-sm border-solid border-b-2 border-zinc-200 hover:border-cyan-800 
                bg-transparent self-center mb-3`}/>
    )
}