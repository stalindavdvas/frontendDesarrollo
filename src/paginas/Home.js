import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ExternalLink } from "react-external-link";
import carreraslogo from "../img/carrera.jpg";
import universologo from "../img/univer.png";
import ingresologo from "../img/comoIngreso.jpeg";
import cronologo from "../img/crono.jpeg";
import "../estilos/Home.css";
const Home = () => {
  return (
    <div>
      <Container >
        <Row>
          <Col style={{height:"80vh", overflowY: "auto" }}>
            <Row>
              <Col>
                <Card>
                  <Card.Img variant="top" src={cronologo} height="250"></Card.Img>
                  <Card.Body>
                    <Card.Title>Cronograma Educación Superior</Card.Title>
                    <Card.Text>
                      Sitio Web para obtener información acerca de fechas para
                      inscripciones y proceso de acceso a la educación superior.
                    </Card.Text>
                    <ExternalLink href="https://edusuperior.ec/">
                      <Button variant="primary" size="lg">
                        Ir
                      </Button>
                    </ExternalLink>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={carreraslogo}
                    className="tamañoImagen" height="250"
                  />
                  <Card.Body>
                    <Card.Title>Carreras más Demandadas 2023</Card.Title>
                    <Card.Text>
                      Esta página te habla sobre las carreras más demandadas en
                      el ecuador durante el año 2023.
                    </Card.Text>
                    <ExternalLink href="https://www.enciclopediadelecuador.com/carreras-mas-demandadas-en-ecuador/">
                      <Button variant="primary" size="lg">
                        Ir
                      </Button>
                    </ExternalLink>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Img variant="top" src={ingresologo} height="250"/>
                  <Card.Body>
                    <Card.Title>Cómo Ingreso a la U?</Card.Title>
                    <Card.Text>
                      En esta página puedes ver los pasos y el proceso que debes seguir si quieres acceder a la 
                      Educación Superior.
                    </Card.Text>
                    <ExternalLink href="https://senescyt.com.ec/blog/como-ingresar-universidad-2024-registrounico2024-senescyt/">
                      <Button variant="primary" size="lg">
                        Ir
                      </Button>
                    </ExternalLink>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={universologo} height="250"/>
                  <Card.Body>
                    <Card.Title>Carreras de Alta Demanda en Ecuador</Card.Title>
                    <Card.Text>
                     En este sitio puedes ver una publicación de las carreras con mayor 
                     demanda en el Ecuador.
                    </Card.Text>
                    <ExternalLink href="https://www.eluniverso.com/noticias/informes/estas-son-las-diez-carreras-universitarias-con-mayor-demanda-en-ecuador-nota/">
                      <Button variant="primary" size="lg">
                        Ir
                      </Button>
                    </ExternalLink>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
