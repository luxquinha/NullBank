import React from "react";
import { Link } from "react-router-dom";

export default function SingIn(){
    return(
        <div className="flex flex-col items-center w-full">
            <Link to={'/'} className="text-center text-2xl text-zinc-500 font-bold absolute left-3 top-2 no-underline">NullBank</Link>
            <span className="self-center mt-2 text-zinc-500 text-xl font-semibold tracking-widest">LOGIN</span>
            <Link to={'/signUp'} className="no-underline text-sm text-zinc-400 hover:text-zinc-500 hover:font-semibold">I'm not client</Link>
        </div>
    )
}