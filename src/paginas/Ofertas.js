import React from 'react'
import BarraNav from "../Barra";

 const Ofertas = ()=> {
  return (
    <div>
       {/*En esta seccion se carga la cabecera o barra de navegacion*/}
       <BarraNav></BarraNav>

{/*En esta seccion se carga el cuerpo de la pagina */}
      <h1>En esta pagina se van a cargar los datos de carreras obtenidos desde la api de base de datos</h1>
    </div>
  )
}
export default Ofertas
