import { useState } from "react"


export const Counter = () => {
    const [cont, setContador] = useState(10);
    const incrementarContador = (value: number)=>{
        setContador(cont+value);
    }
   

  return (
    <div>
        <h3>Contador: <small>{cont}</small></h3>
        &nbsp;
        <button onClick={()=>incrementarContador(+1)}>Agregar +1    </button>
        &nbsp;
        <button onClick={()=>incrementarContador(-1)}>Agregar -1    </button>
    </div>
  )
}


