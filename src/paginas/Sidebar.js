import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { ArrowRight, Buildings } from "react-bootstrap-icons";
import { House, CardChecklist, Chat, Backpack,FilePerson,Book } from "react-bootstrap-icons";
import { Navbar } from "react-bootstrap";
import '../estilos/Sidebar.css';


const Sidebar = ({ onSidebarItemClick }) => {
  const [activeItem, setActiveItem] = useState("/home");
  const usuario = JSON.parse(localStorage.getItem("estudiante"));
  const handleItemClick = (eventKey) => {
    setActiveItem(eventKey);
    onSidebarItemClick(eventKey);
  };
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="lg"
      className=""
      style={{ height: "100%", width:"100%"}}
    >
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          defaultActiveKey="/home"
          className="flex-md-column"
          activeKey={activeItem}
          onSelect={handleItemClick}
          style={{ height: "100%", width:"100%"}}
        >
          <div className="divisor"></div>
          <Nav.Link eventKey="/home" className="OpcionBarra" style={{alignItems:"center"}}>
            <House /> <span className="">Inicio</span>
          </Nav.Link>
          <div className="divisor"></div>
          <Nav.Link eventKey="/TestVocacional" className="OpcionBarra ">
            {" "}
            <CardChecklist />{" "}
            <span className="">Test Vocacional</span>
          </Nav.Link>
          <div className="divisor"></div>
          <Nav.Link eventKey="/Recomendaciones" className="OpcionBarra ">
            {" "}
            <Backpack />{" "}
            <span className="">Recomendaciones</span>
          </Nav.Link>
          <div className="divisor"></div>
          {usuario ? (
            <>
              {usuario.tipo === "administrador" && (
                <div>
                  <Nav.Link eventKey="/Estudiantes" className="OpcionBarra">
            {" "}
            <FilePerson /> <span className="">Gestion Estudiantes</span>
          </Nav.Link>
          <div className="divisor"></div>
          <Nav.Link eventKey="/Universidades" className="OpcionBarra" >
            {" "}
            <Buildings /> <span className="">Gestion Universidades</span>
          </Nav.Link>
          <div className="divisor"></div>
          <Nav.Link eventKey="/Carreras" className="OpcionBarra">
            {" "}
            <Book /> <span className="">Gestion Carreras</span>
          </Nav.Link>
          <div className="divisor"></div>
                </div>
              )}
            </>
          ) : (
           <></>
          )}
          {/* Agrega más enlaces según sea necesario */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
