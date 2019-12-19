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

import c1 from '../../assets/img/c1.png'
import c7 from '../../assets/img/c7.jpg'
import c13 from '../../assets/img/c13.jpg'
import c18 from '../../assets/img/c18.jpg'
import c32 from '../../assets/img/c32.jpg'

const Carousel_inicio = () => (
  <div className="centrar_carousel" >
    <Carousel>

      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c1}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c7}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c13}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c18}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c32}
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
  </div>
)

export default Carousel_inicio
