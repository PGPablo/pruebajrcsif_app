// LIBS
import React from 'react'
import {Form, Button, Table}  from 'react-bootstrap'

// ASSETS
import '../../estilos/Blog.css'

const Blog = () => (
  <div className="container border shadow mt-4">
    <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Submit
      </Button>
    </Form>

    <hr /><br /><br /><br />

    <h2> Bienvenido Pablo Pérez </h2>
    <h4>Aqui tienes tus documentos </h4>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre del archivo</th>
          <th>Tipo de archivo</th>
          <th>Fecha de subida</th>
          <th>Cualquier otra cosa</th>
          <th>Descarga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td><Button variant="info" type="submit">
          Descargar
          </Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td><Button variant="info" type="submit">
          Descargar
          </Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td><Button variant="info" type="submit">
          Descargar
          </Button></td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default Blog
