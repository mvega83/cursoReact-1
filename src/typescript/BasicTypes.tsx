
export const BasicTypes = () => {
    const nombre: string='Marco Vega' ;
    const edad: number=40;
    const estaActivo: boolean= true;
    const poderes: string []= ['React', 'React-Native', 'Java', 'Javascript' ];
    poderes.push('PHP');
  return (
    <>
      <h3>Tipos Báscos</h3>
      {nombre} {edad} {estaActivo}
      <br></br>
      {poderes.join(', ')}
    </>
  )
}


