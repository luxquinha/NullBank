import React from "react";
import { save } from "../icons/icones";

export default function ButtonFormTable(){
    return(
        <button type="submit" className="h-10 w-24 p-2 bg-cyan-800 text-white font-semibold tracking-wide flex flex-row items-center justify-between rounded-2
        hover:bg-cyan-700">
          <span>SALVAR</span>
          <span>{save}</span>
        </button>

    )
}