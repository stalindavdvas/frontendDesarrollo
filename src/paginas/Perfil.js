import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { ESTUDIANTE_CARGAR_ID, ESTUDIANTE_GUARDAR } from "../appconfig";
const Perfil = () => {
  const [estudiante, setEstudiante] = useState({
    _id: "",
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    telefono: "",
    correo: "",
    password: "",
    tipo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const estudianteId = "65d37a11bc15560a3b94a17c";
      try {
        const response = await axios.get(
          `${ESTUDIANTE_CARGAR_ID}${estudianteId}`
        );
        setEstudiante(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEstudiante({ ...estudiante, [name]: value });
  };
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      _id,
      nombre,
      apellido,
      dni,
      direccion,
      telefono,
      correo,
      password,
      tipo,
    } = estudiante;

    try {
      const response = await axios.post(`${ESTUDIANTE_GUARDAR}`, {
        _id,
        nombre,
        apellido,
        dni,
        direccion,
        telefono,
        correo,
        password,
        tipo,
      });

      // Manejar la respuesta de la API, mostrar mensajes de éxito o errores, etc.
      console.log("Datos actualizados con éxito:", response.data);
      setGuardadoExitoso(true);

      // Ocultar la alerta después de 5 segundos (5000 milisegundos)
      setTimeout(() => {
        setGuardadoExitoso(false);
      }, 5000);
    } catch (error) {
      console.error("Error al guardar datos:", error);
      
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={estudiante._id} readOnly />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={estudiante.nombre}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            value={estudiante.apellido}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Dni</Form.Label>
          <Form.Control
            type="text"
            name="dni"
            value={estudiante.dni}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="direccion"
            value={estudiante.direccion}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Dni</Form.Label>
          <Form.Control
            type="text"
            name="dni"
            value={estudiante.dni}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            value={estudiante.telefono}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="direccion"
            value={estudiante.direccion}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="text"
            name="correo"
            value={estudiante.correo}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={estudiante.password}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Label>Tipo</Form.Label>
          <Form.Control type="text" value={estudiante.tipo} readOnly />
        </Col>
      </Row>
      <Row>
        <Col>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
        Actualizar
      </Button>
        </Col>
      </Row>
      
      {guardadoExitoso && (
        <Alert
          variant="success"
          onClose={() => setGuardadoExitoso(false)}
          dismissible
        >
          Los datos se han guardado con éxito.
        </Alert>
      )}
    </Form>
  );
};

export default Perfil;
