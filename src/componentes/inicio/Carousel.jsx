/*
  Componente Carousel
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import { Carousel } from 'react-bootstrap'

import '../../estilos/Carousel.css'

import { useSelector } from 'react-redux'

const CarouselInicio = () => {

  const sliders = useSelector(store => store.sliders.listaSliders)


  return (

    <div className="centrar_carousel" >
        <Carousel>

          {

            sliders ? (sliders.map(row => {
              return (
                <Carousel.Item key={row.id}>
                  <img className="d-block w-100 img_carousel"
                    src={row.imagenurl}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )
            }))  : 
            (
              <div className="spinner-grow text-danger m-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )


          }

        </Carousel>
        </div>
  )

}

export default CarouselInicio
