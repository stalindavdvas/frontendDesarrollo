import React from "react";
import Home from "./Home";
import Recomendacion from "./Recomendacion";
import TestVocacional from "./TestVocacional";
import Carreras from "./Carreras";
import Chat from "./Chat";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Dropdown,
  Button,
} from "react-bootstrap";
import Perfil from "./Perfil";
const MainContent = ({ selectedOption }) => {
  let content = null;

  switch (selectedOption) {
    case "/home":
      content = <Home></Home>;
      break;
    case "/TestVocacional":
      content = <TestVocacional/>;
      break;
    // Agrega más casos según sea necesario
    case "/Recomendaciones":
      content = <Recomendacion></Recomendacion>;
      break;
    case "/Chatbot":
      content = <Chat></Chat>;
      break;
    case "/Universidades":
      content = <h2>Contenido del chat</h2>;
      break;
    case "/Carreras":
          content = <Carreras/>;
          break;
    case "/Perfil":
            content = <Perfil/>;
            break;      
    case "/Estudiantes":
            content = <h2>Contenido del chat</h2>;
            break;
    default:
      content = <h2>Contenido no encontrado</h2>;
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default MainContent;
