
import { useState } from "react";

interface Opcional {
    valorInicial?:number; //definir si es opcional el valor inicial y en caso que no vaya como parametro  se define como 10 en la funcion
}

export const useCounter = ({valorInicial =10}: Opcional) => { //si no va el valorInicial definelo como 10

    const [cont, setContador] = useState<number>(valorInicial);
    
    const incrementarContador = (value: number)=>{
        const suma = cont+ value;
        if (suma >=0 ){
            setContador(cont+value);
        }
        else 
            return;

       
    }
   
  return {
    //Propiedades
    cont,

    //metodos
    incrementarContador,
  }
}


