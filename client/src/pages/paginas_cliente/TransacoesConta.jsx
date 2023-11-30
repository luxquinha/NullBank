
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Extrato from "../../componentes/clientes/Extrato";
import useClientContext from '../../hooks/useClientContext'

export default function TransacoesConta() {

  return(
    <div>
      <Extrato/>
    </div>
  )
}