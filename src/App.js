import "./estilos/App.css";
import "./estilos/miCss.css";
import Inicio from "./paginas/Inicio";
import OfertasAca from "./paginas/Ofertas";
import Acerca from "./paginas/Acerca";
import Registrar from "./paginas/Registrar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="Fondo">
      <BrowserRouter>
      {/* Este es el header que contiene las opciones de menu inicial en la pagina de inicio */}
     

      <Routes>
        <Route path="/" element={<Inicio></Inicio>}/>
        <Route path="/Ofertas" element={<OfertasAca></OfertasAca>}/>
        <Route path="/Acerca" element={<Acerca></Acerca>}/>
        <Route path="/Registro" element={<Registrar></Registrar>}/>
      </Routes>
      {/*En esta parte se carga el cuerpo de la pagina */}
     
      </BrowserRouter>
    </div>
  );
}
export default App;
