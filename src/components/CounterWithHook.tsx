import { useCounter } from '../hooks/useCounter'


export const CounterWithHook = () => {
  const {cont, incrementarContador} =useCounter({
    valorInicial:5
  });  

  return (
    <div>
        <h3>Contador: <small>{cont}</small></h3>
        &nbsp;
        <button  onClick={()=>incrementarContador(+1)}>AgregarH +1    </button>
        &nbsp;
        <button onClick={()=>incrementarContador(-1)}>AgregarH -1    </button>
    </div>
  )
}


