import React from 'react';
import './App.css';
import {Modal,ModalBody,ModalHeader,ModalFooter,Row,Col,Navbar,Container,Nav,NavDropdown,Button,Table, FormGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import datos from "./Datos";


class App extends React.Component{
  state={
    datos:datos,
    
    form:{
      id:'',
      nombre:'',
      direccion:'',
      telefono:'',
      pagina:'',
    },
    modalInsertar: false,
  }
  handleChange=e=>{
    this.setState(
      {
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      }
    )

  }
 mostarModalInsertar=()=>{
  this.setState({modalInsertar: true});
 }
 ocultarModalInsertar=()=>{
  this.setState({modalInsertar: false});
 }
  render() {
    return (
      <div className="App">
        <header>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">ScientIA</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#features">Ofertas Academicas</Nav.Link>
              <Nav.Link href="#pricing">Test Vocacional</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        </header>
        <main>
        <Container fluid>
        <Row className='cuerpo'>
          <Col>
          <h1 class='encabezado'>
            Sistema de Gestión
          </h1>
          
          <Button color="success" onClick={()=>this.mostarModalInsertar()} >
           Insertar
          </Button>
         
          <Table striped bordered hover>
            <thead>
              <tr>
                 <th>id</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Página</th>
               <th>Acciones</th>
              </tr>
            </thead>
          <tbody>
            {this.state.datos.map((elemento)=>(
              <tr>
                <td>
                  {elemento.id}
                </td>
                <td>
                  {elemento.nombre}
              </td>
              <td>
                {elemento.direccion}
              </td>
              <td>
                {elemento.telefono}
              </td>
              <td>
                {elemento.pagina}
              </td>
              <td><Button color="primary">Editar</Button>{" "}
              <Button color="danger">Eliminar</Button>{" "}
              <Button color="danger">Leer</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    
       
  
          </Col>
        </Row>
      </Container>
      <Modal isOpen={this.state.modalInsertar="true"}>
        <ModalHeader>
          <div>
            <h3>
              Insertar Registro
            </h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>
              Id:
            </label>
            <input className="form-control" readOnly type="text" value={this.state.datos.length+1}/>
          </FormGroup>
          <FormGroup>
            <label>
              Nombre
            </label>
            <input className="form-control" name="nombre" type="text" onChange={this.handleChange}/>

          </FormGroup>

          <FormGroup>
            <label>
              Direccion
            </label>
            <input className="form-control" name= "direccion" type="text" onChange={this.handleChange}/>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button 
          color="primary"
          onClick={() => this.modalInsertar()}>
           Insertar
          </Button>
          <Button 
          color="danger" 
          onClick={()=>this.ocultarModalInsertar()}>
           Cancelar
          </Button>
        </ModalFooter>

      </Modal>
        </main>
      </div>
    );
  }
}



export default App;