import "./estilos/App.css";
import "./estilos/miCss.css";
import Inicio from "./paginas/Inicio";
import OfertasAca from "./paginas/Ofertas";
import Acerca from "./paginas/Acerca";
import Registrar from "./paginas/Registrar";
import Login from "./paginas/Login";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import InicioEstudiante from "./paginas/InicioEstudiante";
import TestVocacional from "./paginas/TestVocacional";
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
        <Route path="/Login" element={<Login></Login>}/>
        <Route path="/InicioEstudiante" element={<InicioEstudiante></InicioEstudiante>}/>
        <Route path="/TestVocacional" element={<TestVocacional></TestVocacional>}/>
      </Routes>
      {/*En esta parte se carga el cuerpo de la pagina */}
     
      </BrowserRouter>
      
    </div>
  );
}
export default App;
