/*
  Componente Carousel
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import {Carousel}  from 'react-bootstrap'

import '../../estilos/Carousel.css'

import c1 from '../../assets/img/c1.jpg'
import c2 from '../../assets/img/c2.jpg'
import c3 from '../../assets/img/c3.jpg'

const CarouselInicio = () => (
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
          src={c2}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img_carousel"
          src={c3}
          alt="Third slide"
        />
      </Carousel.Item>


    </Carousel>
  </div>
)

export default CarouselInicio
