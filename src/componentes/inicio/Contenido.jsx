/*
  Componente Cards de inicio
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import {Card, Button}  from 'react-bootstrap'

import '../../estilos/Contenido.css'

import d1 from '../../assets/img/d1.jpg'
import d2 from '../../assets/img/d2.jpg'
import d3 from '../../assets/img/d3.jpg'

const Cards_inicio = () => (
  <div className="centrar_cards">
    <div className="row center">
      <Card className="diseño_card">
        <Card.Img variant="top" src={d1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="diseño_card">
        <Card.Img variant="top" src={d2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="diseño_card">
        <Card.Img variant="top" src={d3} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <div>
        <p className="estilo_letra_Dancing" >
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborumw."
        </p>
      </div>
    </div>
  </div>

)

export default Cards_inicio
