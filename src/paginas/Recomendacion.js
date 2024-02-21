import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { RECOMENDACION } from '../appconfig';
const Recomendacion = () => {
  const [carrerasRecomendadas, setCarrerasRecomendadas] = useState([]);
  const estudiante = JSON.parse(localStorage.getItem("estudiante"));
  const [error, setError] = useState(null);
  const estId = estudiante._id;
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
         (`${RECOMENDACION}`) + estId
        );
        setCarrerasRecomendadas(response.data);
        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Respuestas no encontradas para el estudiante
          setError("Aún no has llenado el test vocacional.");
        } else if (error.response && error.response.status === 404) {
          setError('Aún no has llenado el test vocacional. \n Debes dirigirte a la pestaña de Test Vocacional y llenarlo');
        
        } else {
          setError('Error al obtener recomendaciones de carreras. No se pudo establecer comunicacion con el servidor');
        }
      } finally {
        // Cuando la carga se completa (ya sea con éxito o error), actualiza el estado de cargando
        setCargando(false);
      }
    };

    if (estId) {
      fetchData();
    }
  }, [estId]);

  return (
    <div>
      <h2>Carreras Recomendadas</h2>
      {cargando ? (
        <div>
          <Spinner animation="border" variant="warning" />
          <p>Cargando...</p>
        </div>
      ) : error ? (
        <div>
          <p>{error}</p>
          
        </div>
      ) : (
        <Accordion>
          {carrerasRecomendadas.map((carrera, i) => (
            <Accordion.Item key={carrera._id} eventKey={i + 1}>
              <Accordion.Header>{carrera.nombre}</Accordion.Header>
              <Accordion.Body>
                Titulo: {carrera.titulo}
                <br />
                Semestres: {carrera.duracion}
                <br />
                {/*Universidad: {carrera.universidad}*/}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Recomendacion;
