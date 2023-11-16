import React from "react";
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <nav className="navbar bg-body-tertiary max-w-[100vw] fixed top-0 left-0 right-0">
            <div className="container-fluid">
                <span className="text-center text-2xl text-zinc-500 font-bold">NullBank</span>
                <Link to={'/signIn'} className="no-underline text-sm text-zinc-400 hover:text-zinc-500 hover:font-semibold">Login</Link>
            </div>
        </nav>
    )
}