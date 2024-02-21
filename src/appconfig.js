//=======================Configuracion API Mongo Spring Boot===================================
//puerto
export const PUERTO='8181';
//SERVIDOR
export const SERVIDOR='http://localhost:';

//EndPoints Cargar
export const UNIVERSIDAD_CARGAR = SERVIDOR+PUERTO+'/api/v1/universidad/getAll';
export const CARRERA_CARGAR = SERVIDOR+PUERTO+'/api/v1/carreras/getAll';
export const ESTUDIANTE_CARGAR = SERVIDOR+PUERTO+'/api/v1/estudiante/getAll';
export const VOCACION_CARGAR = SERVIDOR+PUERTO+'/api/v1/vocacion/getAll';
export const CHAT_CARGAR = SERVIDOR+PUERTO+'/api/v1/chat/getAll';
//EndPoints Cargar por Valor
export const UNIVERSIDAD_CARGAR_ID = SERVIDOR+PUERTO+'/api/v1/universidad/search/';
export const CARRERA_CARGAR_ID = SERVIDOR+PUERTO+'/api/v1/carreras/search/';
export const ESTUDIANTE_CARGAR_ID = SERVIDOR+PUERTO+'/api/v1/estudiante/search/';
export const CHAT_CARGAR_ID = SERVIDOR+PUERTO+'/api/v1/chat/search/';
export const VOCACION_CARGAR_ID = SERVIDOR+PUERTO+'/api/v1/vocacion/search/';
//cargar por id universidad
export const CARRERA_CARGAR_ID_UNI = SERVIDOR+PUERTO+'/api/v1/carreras/getByUniversidad/';
//cargar por Id estudiante
export const VOCACION_CARGAR_ID_EST = SERVIDOR+PUERTO+'/api/v1/vocacion/getByEstudiante/';
export const CHAT_CARGAR_IDEST = SERVIDOR+PUERTO+'/api/v1/chat/getByEstudiante/';
//Endpoints Guardar
export const UNIVERSIDAD_GUARDAR = SERVIDOR+PUERTO+'/api/v1/universidad/save';
export const CARRERA_GUARDAR = SERVIDOR+PUERTO+'/api/v1/carreras/save';
export const ESTUDIANTE_GUARDAR = SERVIDOR+PUERTO+'/api/v1/estudiante/save';
export const VOCACION_GUARDAR = SERVIDOR+PUERTO+'/api/v1/vocacion/save';
export const CHAT_GUARDAR = SERVIDOR+PUERTO+'/api/v1/chat/save';
//EndPoints Actualizar 
export const UNIVERSIDAD_ACTUALIZAR_ID = SERVIDOR+PUERTO+'/api/v1/universidad/edit/';
export const CARRERA_ACTUALIZAR_ID = SERVIDOR+PUERTO+'/api/v1/carreras/edit/';
export const ESTUDIANTE_ACTUALIZAR_ID = SERVIDOR+PUERTO+'/api/v1/estudiante/edit/';
export const CHAT_ACTUALIZAR_ID = SERVIDOR+PUERTO+'/api/v1/chat/edit/';
export const VOCACION_ACTUALIZAR_ID = SERVIDOR+PUERTO+'/api/v1/vocacion/edit/';
//EndPoints Eliminar
export const UNIVERSIDAD_ELIMINAR_ID = SERVIDOR+PUERTO+'/api/v1/universidad/delete/';
export const CARRERA_ELIMINAR_ID = SERVIDOR+PUERTO+'/api/v1/carreras/delete/';
export const ESTUDIANTE_ELIMINAR_ID = SERVIDOR+PUERTO+'/api/v1/estudiante/delete/';
export const CHAT_ELIMINAR_ID = SERVIDOR+PUERTO+'/api/v1/chat/delete/';
export const VOCACION_ELIMINAR_ID = SERVIDOR+PUERTO+'/api/v1/vocacion/delete/';

//EndPoint Login
export const LOGIN = SERVIDOR+PUERTO+'/api/v1/estudiante/login';

//================Configuracion API Recomendaciones==============================
//puerto Recomendaciones
export const PUERTO_RECOMENDACION='5000';
//Servidor
export const SERVIDOR_RECOMENDACION='http://localhost:'
//Obtener datos
export const RECOMENDACION = SERVIDOR_RECOMENDACION+PUERTO_RECOMENDACION+'/recomendar/';