/*
  Componente Cards de inicio
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import {Card}  from 'react-bootstrap'

import '../../estilos/Contenido.css'

import d1 from '../../assets/img/d1.jpg'
import d2 from '../../assets/img/d2.jpg'
import d3 from '../../assets/img/d3.jpg'

const Cards_inicio = () => (

  <div>
    <div className="contenedor row color-letra estilo_letra_Gruppo">
      
      <div className="izquierda">
        <Card className="diseño_card">
          <Card.Img variant="top" src={d1} />
          <Card.Body>
            <Card.Title>Conocenos.</Card.Title>
            <Card.Text>
               Diana es la pesadilla de la que nunca voy a despertar.
            </Card.Text>
            <button type="button" className="btn btn-outline-info">Leer más</button>
          </Card.Body>
        </Card>
      </div>

      <div className="centro">
        <Card className="diseño_card">
          <Card.Img variant="top" src={d2} />
          <Card.Body>
            <Card.Title>Servicios.</Card.Title>
            <Card.Text>
               Diana es la pesadilla de la que nunca voy a despertar.
            </Card.Text>
            <button type="button" className="btn btn-outline-info">Leer más</button>
          </Card.Body>
        </Card>
      </div>

      <div className="derecha">
      <Card className="diseño_card">
        <Card.Img variant="top" src={d3} />
        <Card.Body>
          <Card.Title>Clientes.</Card.Title>
          <Card.Text>
             Diana es la pesadilla de la que nunca voy a despertar.
          </Card.Text>
          <button type="button" className="btn btn-outline-info">Leer más</button>
        </Card.Body>
      </Card>
      </div>

    </div>

    <h3 className="estilo_letra_Raleway"> Diana es la pesadilla de la que nunca voy a despertar. </h3>
    <h3 className="estilo_letra_Baskervville"> Diana es la pesadilla de la que nunca voy a despertar. </h3>
    <h3 className="estilo_letra_Cinzel"> Diana es la pesadilla de la que nunca voy a despertar. </h3>
    <h3 className="estilo_letra_Dancing"> Diana es la pesadilla de la que nunca voy a despertar. </h3>
    <h3 className="estilo_letra_Gruppo"> Diana es la pesadilla de la que nunca voy a despertar. </h3>
    <h3 className="estilo_letra_Sans"> Diana es la pesadilla de la que nunca voy a despertar. </h3>
    <h3 className="estilo_letra_Slab"> Diana es la pesadilla de la que nunca voy a despertar. </h3>
    <h3 className="estilo_letra_Montserrat"> Diana es la pesadilla de la que nunca voy a despertar. </h3>
    <h3 className="estilo_letra_Bellefair"> Diana es la pesadilla de la que nunca voy a despertar. </h3>

  </div>






)

export default Cards_inicio
