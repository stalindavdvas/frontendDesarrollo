import React from 'react'
import BarraNav from "../Barra";


export default function Acerca() {
  return (
    <div>
       {/*En esta seccion se carga la cabecera o barra de navegacion*/}
       <BarraNav></BarraNav>

{/*En esta seccion se carga el cuerpo de la pagina */}
      <p>
      Grupo 1:<br/>
      - Stalin Vasco<br/>
      - Jordan Paida<br/>
      - Jefferson Llerena<br/>
      - Christian Tapia
      </p>
    </div>
  )
}
