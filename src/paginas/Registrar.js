import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../estilos/Registro.css";
import logoscientia from "../img/scientialogo.png";
import ovalo from "../img/oval1.png";
import { Link } from "react-router-dom";
const Registrar = () => {
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
            </Link>
          </Col>
          <Col xs={10} md={6} lg={4} className="circulo">
          </Col>
        </Row>

        {/* Row para el contenido principal */}
        <Row className="justify-content-center align-items-center fondoRow">
          <Col xs={10} md={6} lg={4} className="text-center">
            <p className="parrafo">
              Hola!
              <br />
              Te ayudaré en el proceso de elección de <br />
              carreras universitarias que se ajusten mejor <br />
              a tus preferencias y aptitudes.<br />
              Crea tu cuenta para explorar sobre las ofertas Academicas.
            </p>
          </Col>
          <Col xs={10} md={6} lg={4} className="align-items-center">
            <Card className="tarjetaRegistro">
              <Card.Header as="h5">Crea tu Cuenta</Card.Header>
              <Card.Body>
                <Form>
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <FloatingLabel controlId="floatingInput" label="Nombres" className="mb-3">
                      <Form.Control  type="text"  placeholder="Ingresar Nombres"/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <FloatingLabel controlId="floatingInput" label="Apellidos" className="mb-3">
                      <Form.Control  type="text"  placeholder="Ingresar Apellidos"/>
                    </FloatingLabel>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <FloatingLabel controlId="floatingInput" label="Cedula" className="mb-3">
                      <Form.Control  type="text"  placeholder="Ingresar Cedula"/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <FloatingLabel controlId="floatingInput" label="Telefono" className="mb-3">
                      <Form.Control  type="text"  placeholder="Ingresar Apellidos"/>
                    </FloatingLabel>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                  <FloatingLabel controlId="floatingInput" label="Direccion" className="mb-3">
                      <Form.Control  type="text"  placeholder="Ingresar Direccion"/>
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                  <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                      <Form.Control  type="email"  placeholder="Ingresar Direccion"/>
                    </FloatingLabel>
                  </Form.Group>
                  <Row className="mb-3">
                   
                    <Form.Group as={Col} controlId="formGridPassword">
                    <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                      <Form.Control  type="password"  placeholder="Ingresar Password"/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <FloatingLabel controlId="floatingInput" label="Repetir Password" className="mb-3">
                      <Form.Control  type="password"  placeholder="Repita Password"/>
                    </FloatingLabel>
                    </Form.Group>
                  </Row>
                  

                  <Button variant="primary" className="botonRegistro" type="submit">
                    Registrar
                  </Button>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                      Ya tienes una cuenta? <Link>Ingresar</Link>
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
