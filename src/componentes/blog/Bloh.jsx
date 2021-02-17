import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button, Accordion } from 'react-bootstrap'
import '../../estilos/Blog.css'

const Blog = () => {

    const noticias = useSelector(store => store.noticias.listaNoticias)

    return (
        <div className="container border shadow mt-4 p-0 ">

            <div className="w-100 fondo_logo_blog">
                <h1 className="Services_Titulo" >Blog</h1>
                <h3 className="Services_Subtitulo" >Te compartimos lo más relevante.</h3>
            </div>
            

            <div className="contenedor_card m-1" >
                {
                    noticias ? (noticias.map(row => {
                        return (
                            <Card className="estilo_card m-4 ">
                                <Card.Body>
                                    <Card.Title className="estilo_letra_Cinzel">
                                        {row.titulo}
                                    </Card.Title>
                                    <Card.Text className="estilo_letra_Gruppo">
                                        {row.subtitulo}
                                    </Card.Text>
                                </Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card border="0">
                                        <Card.Header className="card_acordion pl-3 pr-3">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1" className="estilo_boton_card estilo_letra_Cinzel">
                                                Leer más!
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className="cuerpo_card_acordion estilo_letra_Gruppo">
                                                {row.contenido}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card>
                        )
                    })) :
                        (
                            <div className="spinner-grow text-danger m-5" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        )
                }

            </div>
        </div>
    )
}

export default Blog