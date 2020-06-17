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
import ScrollAnimation from 'react-animate-on-scroll';

import '../../estilos/Carousel.css'

import c1 from '../../assets/img/s1.jpg'
import c2 from '../../assets/img/s2.jpg'
import c3 from '../../assets/img/s3.jpg'

const CarouselInicio = () => (
  <div className="centrar_carousel" >
    <ScrollAnimation animateIn="bounceInRight" >
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
    </ScrollAnimation>


  </div>
)

export default CarouselInicio
