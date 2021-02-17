/*
  Componente Cards de inicio
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import { Card, Accordion, Button, CardGroup } from 'react-bootstrap'
import moment from 'moment'

import '../../estilos/Contenido.css'

import { useSelector } from 'react-redux'

const CardsInicio = () => {

  const cards = useSelector(store => store.cards.listaCards)
  const banners = useSelector(store => store.banners.listaBanners)

  return (
    <div>
      
      <CardGroup className="color-letra estilo_letra_Gruppo">

        {
          cards ? (cards.map(row => {
            return(
              <Card className="diseño_card">
                  <Card.Img variant="top" className="tamaño-img-card" src={row.imagenurl} />

                <Card.Body className="mt-5 mb-5">
                  <Card.Title>{row.titulo}</Card.Title>
                  <Card.Text>
                    {row.contenido}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="color_footer_card">
                  <small className="text-muted">Actualizado {moment(row.fecha).format('DD/MM/YYYY hh:mm a')}</small>
                </Card.Footer>
              </Card>
            )
          })) : 
          (
            <div className="" >
            </div>
          )
        }

      </CardGroup>


      <Accordion defaultActiveKey="0" className="tamaño_acordion">

        {
          banners ? (banners.map( row => {

            return(
              <Card className="card_margen" key={row.id}>
                <Card.Img variant="top" className="tamaño-img-banner" src={row.imagenurl} />
                  <Accordion.Toggle as={Button} variant="link" eventKey={row.id} className="boton_acordion estilo_letra_Cinzel">
                    Click aquí!
                  </Accordion.Toggle>
                <Accordion.Collapse eventKey={row.id}>
                  <Card.Body className="estilo_letra_Gruppo_24">
                  { row.contenido }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )

          })) : 
          (
            <div className="" >
            </div>
          )

        }
        

      </Accordion>

    </div>
  )

}

export default CardsInicio
