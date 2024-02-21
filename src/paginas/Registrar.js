import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Alert} from 'react-bootstrap';
import { ESTUDIANTE_GUARDAR, UNIVERSIDAD_GUARDAR } from '../appconfig';
const Registrar = () => {
  let navigate = useNavigate();
  {
    /*Seccion para iniciar variables para guardar estudiante*/
  }
  const [estudiante, setEstudiante] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    telefono: "",
    correo: "",
    password: "",
    tipo: "usuario"
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEstudiante({ ...estudiante, [name]: value });
  };
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que nombres y apellidos solo contengan letras
    const letrasRegex = /^[A-Za-z]+$/;
    if (
      !letrasRegex.test(estudiante.nombres) ||
      !letrasRegex.test(estudiante.apellidos)
    ) {
      alert("Los nombres y apellidos solo pueden contener letras.");
      return;
    }

    // Validar que cedula y telefono solo contengan números
    const numerosRegex = /^[0-9]+$/;
    if (!numerosRegex.test(estudiante.dni) || !numerosRegex.test(estudiante.telefono)) {
      alert('La cédula y el teléfono solo pueden contener números.');
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(estudiante.correo)) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }

    // Validar que los passwords coincidan
    if (estudiante.password !== estudiante.repetirPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Validar que todos los campos estén llenos
    for (const key in estudiante) {
      if (!estudiante[key]) {
        alert(`El campo ${key} es requerido.`);
        return;
      }
    }
    // Enviar datos a la API
    axios
      .post((`${ESTUDIANTE_GUARDAR}`), estudiante)
      .then((response) => {
        console.log("Estudiante registrado:", response.data);
        // Puedes redirigir a otra página o hacer otras acciones después de registrar
        navigate('/Login');
      })
      .catch((error) => {
        console.error("Error al registrar estudiante:", error);
        // Manejar el error de acuerdo a tus necesidades
        // Manejar otros errores si es necesario
      console.error(error);
      setError('Error desconocido al guardar estudiante o el correo o DNI ya existe.');
      });
  };
  return (
    <>
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
              {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}
            </Link>
          </Col>
          <Col xs={10} md={6} lg={4} className="circulo"></Col>
        </Row>

        {/* Row para el contenido principal */}
        <Row className="justify-content-center align-items-center fondoRow">
          <Col xs={10} md={6} lg={4} className="text-center">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, loop: Infinity }}
              className="parrafo"
            >
              Hola!
              <br />
              Te ayudaré en el proceso de elección de <br />
              carreras universitarias que se ajusten mejor <br />
              a tus preferencias y aptitudes.
              <br />
              Crea tu cuenta para explorar sobre las ofertas Academicas.
            </motion.p>
          </Col>
          <Col xs={10} md={6} lg={4} className="align-items-center">
            <Card className="tarjetaRegistro">
              <Card.Header as="h5">Crea tu Cuenta </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formGridNombres">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresar nombres"
                          name="nombre"
                          value={estudiante.nombre}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formGridApellidos">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresar Apellidos"
                          name="apellido"
                          value={estudiante.apellido}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formGridDni">
                        <Form.Label>dni:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresar cédula o pasaporte"
                          name="dni"
                          value={estudiante.dni}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formGridTelf">
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresar Telefono"
                          name="telefono"
                          value={estudiante.telefono}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Direccion:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese Direccion"
                      name="direccion"
                      value={estudiante.direccion}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese correo valido"
                      name="correo"
                      value={estudiante.correo}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={estudiante.password}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formGridPassword1">
                        <Form.Label>Repetir Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Repita Password"
                          name="repetirPassword"
                          value={estudiante.repetirPassword}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    type="submit"
                    className="botonRegistro"
                  >
                    Registrar
                  </Button>
                  <Form.Group as={Col} controlId="formGridCuenta">
                    Ya tienes una cuenta? <Link to="/Login">Ingresar</Link>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Registrar;
