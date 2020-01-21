/*
  Componente Cards de inicio
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import {Card, Accordion, Button, Nav, CardGroup}  from 'react-bootstrap'

import '../../estilos/Contenido.css'

import d1 from '../../assets/img/d1.jpg'
import d2 from '../../assets/img/d2.jpg'
import d3 from '../../assets/img/d3.jpg'

const CardsInicio = () => (

  <div>
    <CardGroup className="color-letra estilo_letra_Gruppo">
      <Card className="diseño_card">
        <Card.Img variant="top" className="tamaño-img-card" src={d1} />
        <Card.Body>
          <Card.Title>Conocenos</Card.Title>
          <Card.Text>
          Somos una empresa que trabaja con base en altos estándares de calidad y
          profesionalismo.
          </Card.Text>
          <Nav.Link href="/about" type="button" className="btn btn-outline-info boton-card-inico">Leer más</Nav.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Actualizado 16/01/2020</small>
        </Card.Footer>
      </Card>
      <Card className="diseño_card">
        <Card.Img variant="top"  className="tamaño-img-card" src={d2} />
        <Card.Body>
          <Card.Title>Servicios</Card.Title>
          <Card.Text>
            Conoce nuestro catálogo de servicios.
          </Card.Text>
          <Nav.Link href="/services" type="button" className="btn btn-outline-info boton-card-inico">Leer más</Nav.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted ">Actualizado 16/01/2020</small>
        </Card.Footer>
      </Card>
      <Card className="diseño_card">
        <Card.Img variant="top" className="tamaño-img-card" src={d3} />
        <Card.Body>
          <Card.Title>Clientes </Card.Title>
          <Card.Text>
            Si ya eres cliente, consulta tu información aquí.
          </Card.Text>
        </Card.Body>
        <Nav.Link href="/" type="button" className="btn btn-outline-info boton-card-inico">Leer más</Nav.Link>
        <Card.Footer>
          <small className="text-muted">Actualizado 16/01/2020</small>
        </Card.Footer>
      </Card>
    </CardGroup>


    <Accordion defaultActiveKey="0" className="tamaño_acordion">
      <Card className="card_margen">
        <Card.Header className="img_acordion_1">
          <Accordion.Toggle as={Button} variant="link" eventKey="0" className="boton_acordion estilo_letra_Cinzel">
            Click aquí!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="estilo_letra_Gruppo">
          1. Arrendamiento. <br />
          2. Estímulos fiscales. <br />
          3. Eliminación de la compensación universal en el CFF y la LIVA. <br />
          4. Plataformas digitales. <br />
          5. Régimen del sector primario (Agapes). <br />
          6. Ventas a través de terceros por catalogo. <br />
          7. Constancia de retenciones. <br />
          8. RIF para servicios de plataformas tecnológicas. <br />
          9. Arrendamiento de inmuebles. <br />
          10. Fiscalización al outsourcing. <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="card_margen">
        <Card.Header className="img_acordion_2">
          <Accordion.Toggle as={Button} variant="link" eventKey="1" className="boton_acordion estilo_letra_Cinzel">
            Click aquí!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="estilo_letra_Gruppo">
            El consejo de representantes de la Comisión Nacional de Salarios Mínimos (Conasami), que es el organismo público descentralizado encargado de aprobar los salarios mínimos, aprobó incrementar el salario mínimo que se encontraba fijado de 102.68 pesos, en 5% y 14.67 pesos adicionales como parte del monto independiente de recuperación (MIR). Así, este año corriente el salario mínimo será de 123.22 pesos, lo que implica un aumento total del 20%.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </div>






)

export default CardsInicio
