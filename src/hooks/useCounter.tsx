
import { useState } from "react";

export const useCounter = () => {
    const [cont, setContador] = useState<number>(10);
    const incrementarContador = (value: number)=>{
        setContador(cont+value);
    }
   
  return {
    //Propiedades
    cont,

    //metodos
    incrementarContador,
  }
}


