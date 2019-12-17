/*
  Componente Carousel
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import {Carousel, Button}  from 'react-bootstrap'

import '../../estilos/Carousel.css'

import c1 from '../../assets/img/c1.jpg'
import c2 from '../../assets/img/c2.jpg'
import c3 from '../../assets/img/c3.jpg'

const Carousel_inicio = () => (
  <div className="centrar_carousel" >
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
)

export default Carousel_inicio
