import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./estilos/miCss.css";
import logoscientia from "./img/scientialogo.png";
import { NavLink } from 'react-router-dom';
export default function Barra() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{borderBottom: "1px solid #ccc"}}>
      <Container>
        <Navbar.Brand href="/">  <img src={logoscientia}  width="150" height="40"  className="d-inline-block align-top" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto inicio" >
            
            <NavLink  to="/" className="navlink">Inicio</NavLink>
            <NavLink  to="/Ofertas" className="navlink">Ofertas Academicas</NavLink>
            <NavLink to="/Acerca" className="navlink">Acerca de</NavLink>
            
          </Nav>
          <Nav>
            <NavLink to="#deets" className="navlink userLogin">Ingresar</NavLink>
            <NavLink eventKey={2} href="#memes" className="userRegister" style={{color:"white"}}>
              Registrarse
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
