import React, { useEffect, useState } from "react";
import BarraNav from "../Barra";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { ExternalLink } from "react-external-link";
import CarrerasModal from "./CarrerasModal";
import "../estilos/Ofertas.css";
import { UNIVERSIDAD_CARGAR } from '../appconfig';

const Ofertas = () => {

  const [showModal, setShowModal] = useState(false);

  const [selectedUniversidadId, setSelectedUniversidadId] = useState(null);

  const handleShowModal = (universidadId) => {
    setSelectedUniversidadId(universidadId);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setSelectedUniversidadId(null);
    setShowModal(false);
  };

  const [universidades, setUniversidades] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${UNIVERSIDAD_CARGAR}`);
        setUniversidades(response.data);
        console.log(response);
      } catch (error) {
        // Manejar el error
        console.error("Error al obtener la lista de universidades:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/*En esta seccion se carga la cabecera o barra de navegacion*/}
      <BarraNav></BarraNav>

      {/*En esta seccion se carga el cuerpo de la pagina */}
      <Container className="vh-90 card-container">
        {universidades.map((universidad) => (
          <Card key={universidad._id}>
            <Card.Body>
              <Card.Title>{universidad.nombre}</Card.Title>
              <Card.Text>
                Codigo: {universidad._id}
                <br />
                Direccion: {universidad.direccion} <br />
                Telefono: {universidad.telefono}
                <br />
                <ExternalLink href={universidad.pagina}>
                  Sitio Web: {universidad.pagina}
                  <br />
                </ExternalLink>
              </Card.Text>
              <Button onClick={() => handleShowModal(universidad._id)}>
                Ver Carreras
              </Button>
              <CarrerasModal
                universidadId={selectedUniversidadId}
                show={showModal}
                onHide={handleHideModal}
              />
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};
export default Ofertas;
