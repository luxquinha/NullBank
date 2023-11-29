import React, { useState } from "react";

export default function InputBorderBottom({width, placeholder, type, register, label, valor}){
    const [valorInput, setValorInput] = useState('')
    
    const handleInputChange = (event) =>{
      setValorInput(event.target.value)
    }

    return(
        <input type={type ?? 'text'} 
                placeholder={placeholder} 
                {...register(label)}
                value={valor ?? valorInput}
                onChange={handleInputChange}
                className={`w-${width} p-2 outline-none text-sm border-solid border-b-2 border-zinc-200 hover:border-cyan-800 
                bg-transparent self-center `}/>
    )
}