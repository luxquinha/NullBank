import React from "react";

export default function ErrorMessage({message}){
    return(
        <span className="text-xs tracking-wide text-red-500 font-medium -mt-4 pl-1">{message}</span>
    )
}