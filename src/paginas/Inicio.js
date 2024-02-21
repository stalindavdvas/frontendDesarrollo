import React from "react";
import "../estilos/App.css";
import "../estilos/miCss.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import robot from "../img/robot.png";
import BarraNav from "../Barra";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function FluidExample() {
  return <Image src={robot} fluid />;
}

const Inicio = () => {
 // const estudiante = JSON.parse(localStorage.getItem("estudiante"));
  return (
    <div className="Fondo">
        {/*En esta seccion se carga la cabecera o barra de navegacion*/}
        <BarraNav></BarraNav>
  
        {/*En esta seccion se carga el cuerpo de la pagina */}
        <Container style={{ padding: "20px" }}>
          <Row>
            <Col className="text-center">
              {" "}
              <h1 className="titulo">Elige tu mejor futuro!</h1>
              <br></br>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}>
                ¡Explora tu futuro con nuestra plataforma diseñada <br />
                para estudiantes de último año de bachillerato! <br />
                Descubre la carrera perfecta con la ayuda de la inteligencia
                artificial y desata tu potencial único.
              </motion.p>
              <br></br>
              <Link to="/Registro" className="comenzar">
                Empezar
              </Link>
            </Col>
            <Col className="text-center">
              <FluidExample></FluidExample>
            </Col>
          </Row>
        </Container>
    </div>
  );
};

export default Inicio;
