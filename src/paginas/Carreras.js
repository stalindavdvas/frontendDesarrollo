import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { CARRERA_CARGAR, UNIVERSIDAD_CARGAR } from "../appconfig";
import { House, PencilSquare, Trash } from "react-bootstrap-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";

const Carreras = () => {
  const [carreras, setCarreras] = useState([]);
  const [universidades, setUniversidades] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState({});
  const [formData, setFormData] = useState({
    nombre: "",
    titulo: "",
    duracion: 0,
    idUniversidad: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCarreras, setFilteredCarreras] = useState([]);

  useEffect(() => {
    // Obtener carreras y universidades al cargar el componente
    getCarreras();
    getUniversidades();
  }, []);

  const getCarreras = async () => {
    try {
      const response = await axios.get(`${CARRERA_CARGAR}`);
      setCarreras(response.data);
    } catch (error) {
      console.error("Error al obtener carreras:", error);
    }
  };

  const getUniversidades = async () => {
    try {
      const response = await axios.get(`${UNIVERSIDAD_CARGAR}`);
      setUniversidades(response.data);
    } catch (error) {
      console.error("Error al obtener universidades:", error);
    }
  };

  const handleEditClick = (carrera) => {
    setSelectedCarrera(carrera);
    setShowEditModal(true);
  };

  const handleDeleteClick = (carrera) => {
    setSelectedCarrera(carrera);
    setShowDeleteModal(true);
  };

  const handleAddClick = () => {
    setFormData({
      nombre: "",
      titulo: "",
      duracion: 0,
      idUniversidad: "",
    });
    setShowAddModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handleSaveEdit = async () => {
    // Aquí deberías implementar la lógica para enviar los datos editados a tu API
    console.log("Datos editados:", selectedCarrera);
    // Después de guardar, cierra el modal
    handleEditModalClose();
    // Actualiza la lista de carreras para reflejar el cambio
    getCarreras();
  };

  const handleDelete = async () => {
    // Aquí deberías implementar la lógica para eliminar el registro en tu API
    console.log("Eliminar registro:", selectedCarrera);
    // Después de eliminar, cierra el modal
    handleDeleteModalClose();
    // Actualiza la lista de carreras para reflejar el cambio
    getCarreras();
  };

  const handleSaveNewCarrera = async () => {
    // Aquí deberías implementar la lógica para enviar los datos del nuevo registro a tu API
    console.log("Datos nuevos:", formData);
    // Después de guardar, cierra el modal
    handleAddModalClose();
    // Actualiza la lista de carreras para reflejar el cambio
    getCarreras();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button
              variant="success"
              onClick={handleAddClick}
              style={{ marginBottom: "15px" }}
            >
              Añadir Nueva Carrera
            </Button>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Buscar por nombre o ID de Universidad"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{zIndex:"-1"}}
              />
              <Button variant="outline-secondary" id="button-addon2">
                Buscar
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col style={{height:"70vh",overflowY:"auto"}}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Título</th>
                  <th>Duración</th>
                  <th>Universidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carreras.map((carrera) => (
                  <tr key={carrera._id}>
                    <td>{carrera.nombre}</td>
                    <td>{carrera.titulo}</td>
                    <td>{carrera.duracion}</td>
                    <td>{carrera.idUniversidad}</td>
                    <td>
                      <ButtonGroup aria-label="Basic example">
                        <Button
                          variant="warning"
                          onClick={() => handleEditClick(carrera)}
                        >
                          <PencilSquare />
                        </Button>{" "}
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteClick(carrera)}
                        >
                          <Trash />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        {/* Editar Carrera Modal */}
        <Modal show={showEditModal} onHide={handleEditModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Carrera</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* Campos de solo lectura para _id e idUniversidad */}
              <Form.Group controlId="formId">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  readOnly
                  value={selectedCarrera._id}
                />
              </Form.Group>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCarrera.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formTitulo">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCarrera.titulo}
                  onChange={(e) =>
                    setFormData({ ...formData, titulo: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formDuracion">
                <Form.Label>Duración</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedCarrera.duracion}
                  onChange={(e) =>
                    setFormData({ ...formData, duracion: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formIdUniversidad">
                <Form.Label>ID Universidad</Form.Label>
                <Form.Control
                  type="text"
                  readOnly
                  value={selectedCarrera.idUniversidad}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditModalClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSaveEdit}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Eliminar Carrera Modal */}
        <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Eliminar Carrera</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>¿Estás seguro de que deseas eliminar esta carrera?</p>
            <p>Nombre: {selectedCarrera.nombre}</p>
            <p>Título: {selectedCarrera.titulo}</p>
            <p>Duración: {selectedCarrera.duracion}</p>
            <p>ID Universidad: {selectedCarrera.idUniversidad}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDeleteModalClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Añadir Nueva Carrera Modal */}
        <Modal show={showAddModal} onHide={handleAddModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir Nueva Carrera</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formTitulo">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.titulo}
                  onChange={(e) =>
                    setFormData({ ...formData, titulo: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formDuracion">
                <Form.Label>Duración</Form.Label>
                <Form.Control
                  type="number"
                  value={formData.duracion}
                  onChange={(e) =>
                    setFormData({ ...formData, duracion: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formIdUniversidad">
                <Form.Label>ID Universidad</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.idUniversidad}
                  onChange={(e) =>
                    setFormData({ ...formData, idUniversidad: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Selecciona una universidad
                  </option>
                  {universidades.map((universidad) => (
                    <option key={universidad._id} value={universidad._id}>
                      {universidad.nombre}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddModalClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSaveNewCarrera}>
              Guardar Carrera
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Carreras;
