import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button, ListGroup, Table } from "react-bootstrap";
import { CARRERA_CARGAR_ID_UNI} from '../appconfig';

const CarrerasModal = ({ universidadId, show, onHide }) => {
  const [carreras, setCarreras] = useState([]);
  useEffect(() => {
    // Llamar a la API para obtener la lista de carreras por ID de universidad
    const fetchData = async () => {
      try {
        const response = await fetch(
          (`${CARRERA_CARGAR_ID_UNI}`) +
            universidadId
        );
        const data = await response.json();
        setCarreras(data);
      } catch (error) {
        console.error("Error al obtener la lista de carreras:", error);
      }
    };

    if (show) {
      fetchData();
    }
  }, [show, universidadId]);

  return (
    <Modal show={show} onHide={onHide} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Lista de Carreras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Titulo a obtener</th>
              <th>Duracion en Semestres</th>
            </tr>
          </thead>
          <tbody>
            {carreras.map((carrera) => (
              <tr>
                <td>{carrera.nombre}</td>
                <td>{carrera.titulo}</td>
                <td>{carrera.duracion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CarrerasModal;
