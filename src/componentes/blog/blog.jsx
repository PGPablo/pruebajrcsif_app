// LIBS
import React, {Component} from 'react'
import {Card, Button, CardColumns, Accordion}  from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

// ASSETS
import '../../estilos/Blog.css'

// INFO
import NOTICIAS_JSON from './blog_info.json' 
const NOTICIAS = Object.keys(NOTICIAS_JSON)

class CardNoticia extends Component {
    _CrearCards = (NOTICIA) => {
        return(
          <div key={NOTICIA} className="p-3">
            <ScrollAnimation animateIn="pulse" >
              <Card className="estilo_card">
                <Card.Body>
                  <Card.Title className="estilo_letra_Cinzel">
                    { NOTICIAS_JSON[NOTICIA]["titulo"] }
                  </Card.Title>
                  <Card.Text className="estilo_letra_Gruppo">
                    { NOTICIAS_JSON[NOTICIA]["subtitulo"] }
                   </Card.Text>
                </Card.Body>
                <Accordion defaultActiveKey="0">
                  <Card border="0">
                    <Card.Header className="card_acordion">
                      <Accordion.Toggle as={Button} variant="link" eventKey="1" className=" estilo_boton_card estilo_letra_Cinzel">
                        Leer más!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="cuerpo_card_acordion estilo_letra_Gruppo">
                        {NOTICIAS_JSON[NOTICIA]["contenido"]}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card>
            </ScrollAnimation>
          </div>
        )
    }

    render(){
        return(
            <div>
                {NOTICIAS.map(this._CrearCards)}
            </div>
        )
    }

}

const Blog = () => (
  <div className="container border shadow mt-4">
    <CardColumns className="contenedor_card" > 
      <CardNoticia />
    </CardColumns>
    
  </div>
)

export default Blog
