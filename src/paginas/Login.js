import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../estilos/Registro.css";
import logoscientia from "../img/scientialogo.png";
import ovalo from "../img/oval1.png";
import Image from "react-bootstrap/Image";
import robot from "../img/robot.png";
import { Link } from "react-router-dom";
import { CardFooter, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {LOGIN } from '../appconfig';
function FluidExample() {
  return <Image src={robot} fluid />;
}

const Login = () => {
  const [show, setShow] = useState(true);
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const estudiante = JSON.parse(localStorage.getItem("estudiante"));
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        (`${LOGIN}`),
        {
          correo: correo,
          password: password,
        }
      );
      console.log("Respuesta del servidor:", response.data);
      // Guardar la información del estudiante en el localStorage
      localStorage.setItem("estudiante", JSON.stringify(response.data));
      console.log("Datos del estudiante guardados:", response.data);
      // Redirigir a la página de inicioEstudiante
      navigate("/InicioEstudiante");
      //console.log(response.data);
      // Aquí puedes redirigir al usuario a la página deseada después de un inicio de sesión exitoso
      console.log("Accesso Correcto");
    } catch (error) {
      console.error("Error de login:", error.response.data);
      setToastMessage("Credenciales inválidas");
      setShowToast(true);
    }
  };
  useEffect(() => {
    // Obtener la información del estudiante del localStorage
    const estudiante = JSON.parse(localStorage.getItem("estudiante"));

    // Hacer algo con la información del estudiante (por ejemplo, mostrar en la interfaz)
    if (estudiante) {
      // Acceder al nombre y mostrarlo
      console.log("Nombre del estudiante:", estudiante.correo);
      navigate("/InicioEstudiante");
    }else{
        navigate("/Login");
    }
  }, []);
  return (
    <>{estudiante?(navigate("/InicioEstudiante")):(
      <Container fluid className="fondoRow vh-100">
        {/* Row para el logo */}
        <Row className="mb-4 fondoRow">
          <Col xs={10} md={6} lg={4}>
            <Link to="/">
              <img
                src={logoscientia}
                width="150"
                height="40"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Link>
          </Col>
          <Col xs={10} md={6} lg={4} className="circulo"></Col>
        </Row>

        {/* Row para el contenido principal */}
        <Row className="justify-content-center align-items-center fondoRow">
          <Col xs={10} md={6} lg={4} className="text-center">
            <FluidExample></FluidExample>
          </Col>
          <Col xs={10} md={6} lg={4} className="align-items-center">
            <Card className="tarjetaRegistro">
              <Card.Header as="h5">Login Scientia</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="Ingresar Direccion"
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                      >
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Ingresar Password"
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>

                  <Button
                    variant="primary"
                    className="botonRegistro"
                    type="submit"
                  >
                    Ingresar
                  </Button>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    No tienes una cuenta? <Link to="/Registro">Registrate</Link>
                  </Form.Group>
                </Form>
              </Card.Body>
              <CardFooter>
                {" "}
                {/* Toast para mostrar mensaje de error */}
                <Toast
                  show={showToast}
                  onClose={() => setShowToast(false)}
                  className="toast"
                >
                  <Toast.Header>
                    <strong className="me-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>)}
    </>
  );
};

export default Login;
