import React from "react";
import { Link } from "react-router-dom";

export default function SignUp(){
    return(
        <div className="flex flex-col items-center w-full">
            <Link to={'/'} className="text-center text-2xl text-zinc-500 font-bold absolute left-3 top-2 no-underline">NullBank</Link>
            <span className="self-center mt-2 text-zinc-500 text-xl font-semibold tracking-widest">REGISTER</span>
        </div>
    )
}