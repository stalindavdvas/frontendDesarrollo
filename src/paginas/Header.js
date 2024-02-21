import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import logoscientia from "../img/scientialogo.png";
import jef from "../img/jef.png";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Plus } from "react-bootstrap-icons";
import Popover from "react-bootstrap/Popover";
import Chat from "./Chat";
import Perfil from "./Perfil";
const Header = () => {
  const estudiante = JSON.parse(localStorage.getItem("estudiante"));
  let navigate = useNavigate();
  const [userType, setUserType] = useState(estudiante);
  const handleLogout = () => {
    // Limpiar el tipo de usuario y redirigir a la página de inicio o a donde desees
    localStorage.removeItem("estudiante");
    setUserType(null);
    navigate("/"); // Redirigir a la página de inicio (o a la que desees)
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <div>
      <Navbar expand="lg" className="sticky-top">
        <Navbar.Brand>
          {/* Logo o nombre de tu proyecto */}
          <img
            src={logoscientia}
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" logout">
            <div className="d-flex">
              {/* Dropdown de opciones de perfil */}
              <Button className="btnChat" onClick={handleShow}>
                <Plus />
                Chatbot
              </Button>
              {/*Modal chat bot*/}
              <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                scrollable
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Jeff{" "}
                    <img
                      src={jef}
                      width="50"
                      height="50"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Chat />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>

              <Dropdown alignRight>
                <Dropdown.Toggle id="dropdown-basic">
                  {estudiante.correo}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <Button onClick={handleShow1} variant="link" style={{textDecoration:"none",width:"100"}}>Perfil</Button>
                    <Modal show={show1} onHide={handleClose1}>
                      <Modal.Header closeButton>
                        <Modal.Title>Perfil de Usuario</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                       <Perfil/>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                          Cerrar
                        </Button>
                       
                      </Modal.Footer>
                    </Modal>
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <NavLink
                      style={{ textDecoration: "none" }}
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
