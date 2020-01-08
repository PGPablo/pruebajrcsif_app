// LIBS
import React from 'react'
import {Form, Button, Col}  from 'react-bootstrap'

// ASSETS
import '../../estilos/Contact.css'

const Blog = () => (
  <div className="container border shadow mt-4">
    <Form>
      <h2 className="estilo_letra_Cinzel color_titulo">Dejanos tu información, nosotros nos pondremos en contacto.</h2>
      <Form.Row className="estilo_letra_Gruppo">
        <Form.Group as={Col}>
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type="email" placeholder="Nombre completo" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label className="estilo_letra_Gruppo">Dirección</Form.Label>
        <Form.Control className="estilo_letra_Gruppo" placeholder="1234 Main St (información no requerida)" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="estilo_letra_Gruppo">Ciudad</Form.Label>
          <Form.Control className="estilo_letra_Gruppo" placeholder="Celaya"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="estilo_letra_Gruppo">Estado</Form.Label>
          <Form.Control className="estilo_letra_Gruppo" as="select">
            <option>Guanajuato...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="estilo_letra_Gruppo">Télefono</Form.Label>
          <Form.Control className="estilo_letra_Gruppo" placeholder="461 123 4567" />
        </Form.Group>

      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridService">
          <Form.Label className="estilo_letra_Gruppo">¿En qué servicio estas intersado?</Form.Label>
          <Form.Control className="estilo_letra_Gruppo" as="select">
            <option>Asesoría Contable - Fiscal</option>
            <option>Consultoría Administrativa</option>
            <option>Administración de Negocios</option>
            <option>Investigación de Mercados</option>
            <option>Recursos Humanos</option>
            <option>Asesoría Legal</option>
            <option>Marketing</option>
            <option>Asesoría Financiera</option>
            <option>Capacitación Empresarial</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row className="boton_centrado">
        <Button variant="outline-info"  type="submit">
          Mandar información
        </Button>
      </Form.Row>


    </Form>
  </div>
)

export default Blog
