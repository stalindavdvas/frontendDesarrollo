import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../estilos/inicioEstudiante.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


import Header from "./Header";
import { useNavigate } from "react-router-dom";
const InicioEstudiante = () => {


  const estudiante = JSON.parse(localStorage.getItem("estudiante"));
  let navigate = useNavigate();
  const [userType, setUserType] = useState(estudiante);
 
  useEffect(() => {
    // Obtener la información del estudiante del localStorage
    const estudiante = JSON.parse(localStorage.getItem("estudiante"));

    // Hacer algo con la información del estudiante (por ejemplo, mostrar en la interfaz)
    if (estudiante) {
      // Acceder al nombre y mostrarlo
      console.log("Nombre del estudiante:", estudiante.correo);
      navigate("/InicioEstudiante");
    }else{
        navigate("/");
    }
  }, []);
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Cancelar la acción de volver atrás si el usuario está logueado
      if (userType) {
        event.preventDefault();
        navigate('/');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Limpiar el evento al desmontar el componente
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [userType, navigate]);

  const [selectedOption, setSelectedOption] = useState("/home");
  const handleSidebarItemClick = (selected) => {
    setSelectedOption(selected);
  };
  
  return (
    <div>
         {estudiante?(
            <>
               <Container fluid className="vh-100">
        <Row>
          <Col>
            {/* Header */}
            <Header />
          </Col>
        </Row>

        {/* Sidebar y Main Content */}
        <Row className="position-sticky ">
          {/* Sidebar */}
          <Col xs={3} className="sidebarCss columnaSide" style={{ height: '88vh' }}>
            <Sidebar onSidebarItemClick={handleSidebarItemClick} />
          </Col>

          {/* Contenido Principal */}
          <Col xs={9} style={{ height: '88vh' }}>
            {" "}
            <MainContent selectedOption={selectedOption}  />
          </Col>
        </Row>
      </Container></>):(navigate("/"))}
    </div>
  );
};

export default InicioEstudiante;
