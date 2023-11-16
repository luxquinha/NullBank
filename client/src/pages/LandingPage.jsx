import React from "react";
import Header from "../componentes/Header";

export default function LandingPage(){
    const fundo = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2014/02/01/18/00/money-256315_1280.jpg')",
    }
    return (
        <div className="w-screen h-screen">
          <Header/>
          <div style={fundo} className="w-screen h-[92.6vh] bg-no-repeat bg-cover bg-bottom bg-fixed"> 

          </div>
        </div>
      );
}