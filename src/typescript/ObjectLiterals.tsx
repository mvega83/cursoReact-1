

interface Persona {
    apellidos: string;
    direccion: Direccion;
    edad: number;
    estaVivo?:boolean;
    nombres: string;

}
interface Direccion  {
    ciudad: string;
    numCasa: number;
}


export const ObjectLiterals = () => {
  const persona:Persona = {
    nombres: 'Marco Antonio',
    apellidos: 'Vega Rojas',
    edad: 40,
    
    direccion : {
        ciudad: 'Ovalle',
       numCasa: 684
    }
    
  }

    
  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>
      {JSON.stringify(persona,null,2)}
      </pre>
    </>
  )
}


