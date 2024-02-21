import React from "react";
import { useState } from "react";
import { Tabs, Tab, Button, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { VOCACION_GUARDAR } from "../appconfig";
import axios from "axios";

const TestVocacional = () => {
  const [key, setKey] = useState("home");
  const [respuestas, setRespuestas] = useState([]);
  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const [valorSeleccionado, setValorSeleccionado] = useState("");
  const estudiante = JSON.parse(localStorage.getItem("estudiante"));
  const [preguntasRespuestas, setPreguntasRespuestas] = useState([]);
  const [error1, setError1] = useState(null);
  const [exito, setExito] = useState(false);
  // Define preguntas aquí
  const pregunta1 =
    "Trabajar en el diseño de viviendas, armando los planos y combinando mis ideas con las necesidades del cliente";

  const pregunta2 =
    "Representar a una persona u organización en asuntos jurídicos y causas de tipo civil o penal";

  const pregunta3 =
    "Trabajar con tecnología de última generación y pensar posibles aplicaciones en otros campos (medicina, industria, comercio, etc.";

  const pregunta4 =
    "Realizar gestiones en temas de exportación e importación de materias primas, productos industriales, tecnologías, servicios e inversiones en el exterior y desde otros países.";

  const pregunta5 =
    "Conocer y analizar distintas expresiones culturales y manifestaciones estéticas";

  const pregunta6 =
    "Estudiar los procesos cognitivos de atención, memoria, y lenguaje";

  const pregunta7 = "Trabajar en clínicas de salud";

  const pregunta8 =
    "Asesorar en organismos internacionales en áreas de política, producción, finanzas, economía, cultura";

  const pregunta9 =
    "Supervisar la construcción de viviendas, espacios urbanos y de recreación";

  const pregunta10 =
    "Intervenir en proyectos de seguridad informática para empresas e industrias";
  const [respuesta1, setRespuesta1] = useState([""]);
  const [respuesta2, setRespuesta2] = useState([""]);
  const [respuesta3, setRespuesta3] = useState([""]);
  const [respuesta4, setRespuesta4] = useState([""]);
  const [respuesta5, setRespuesta5] = useState([""]);
  const [respuesta6, setRespuesta6] = useState([""]);
  const [respuesta7, setRespuesta7] = useState([""]);
  const [respuesta8, setRespuesta8] = useState([""]);
  const [respuesta9, setRespuesta9] = useState([""]);
  const [respuesta10, setRespuesta10] = useState([""]);
  const [vocacion, setVocacion] = useState([
    { pregunta: pregunta1, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta2, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta3, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta4, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta5, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta6, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta7, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta8, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta9, respuesta: "", idEstudiante: estudiante._id },
    { pregunta: pregunta10, respuesta: "", idEstudiante: estudiante._id },
  ]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar que no haya respuestas nulas
    const respuestasNulas = vocacion.filter(
      (item) => item.respuesta === null || item.respuesta === ""
    );

    if (respuestasNulas.length > 0) {
      setError("Error: Debes responder todas las preguntas.");
      setExito(false);
      return;
    }
    try {
      vocacion.forEach((item) => {
        axios
          .post(`${VOCACION_GUARDAR}`, item)
          .then((response) => {
            console.log("Respuestas Guardadas:", response.data);
            // Puedes redirigir a otra página o hacer otras acciones después de registrar
            setExito(true);
            setError(null);
          })
          .catch((error) => {
            console.error("Error al registrar estudiante:", error);
            // Manejar el error de acuerdo a tus necesidades
            setError(
              "Error desconocido al guardar estudiante o el correo o DNI ya existe."
            );
            setError(
              "Error desconocido al guardar estudiante o el correo o DNI ya existe."
            );
            setExito(false);
          });
      });
    } catch (error) {
      setError(
        "Error desconocido al guardar estudiante o el correo o DNI ya existe."
      );
      setExito(false);
    }
  };
  //Metodos para guardar las preguntas
  const handleSeleccionar1 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[0].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar2 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[1].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar3 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[2].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar4 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[3].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar5 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[4].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar6 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[5].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar7 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[6].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar8 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[7].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar9 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[8].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };
  const handleSeleccionar10 = (e) => {
    const updatedVocacion = [...vocacion];
    updatedVocacion[9].respuesta = e.target.value;
    setVocacion(updatedVocacion);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Seccion 1">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta1}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar1}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta1)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta2}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar2}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta2)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta3}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar3}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta3)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta4}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar4}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta4)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta5}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar5}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta5)}
            </Form.Group>
            <Button variant="primary" onClick={() => setKey("profile")}>
              Siguiente
            </Button>
          </Tab>
          <Tab eventKey="profile" title="Seccion 2" disabled>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta6}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar6}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta6)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta7}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar7}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta7)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta8}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar8}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta8)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta9}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar9}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta9)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{pregunta10}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSeleccionar10}
                required
              >
                <option>Selecciona una Respuesta</option>
                <option value="Me interesa">Me interesa</option>
                <option value="No estoy seguro/a">No estoy seguro/a</option>
                <option value="No me interesa">No me interesa</option>
              </Form.Select>
              {console.log(respuesta10)}
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Guardar
            </Button>
            {error && (
              <Alert variant="danger" dismissible>
                {error}
              </Alert>
            )}
            {exito && (
              <Alert variant="success" dismissible>
                Los datos se guardaron correctamente.
              </Alert>
            )}
          </Tab>
        </Tabs>
      </Form>
    </div>
  );
};

export default TestVocacional;
