import { useCounter } from '../hooks/useCounter'

export const CounterWithHook = () => {
  const {cont, incrementarContador} =useCounter();  

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


