// LIBS
import React from 'react'
import {Card, Button, CardColumns, Accordion}  from 'react-bootstrap'


// ASSETS
import '../../estilos/Blog.css'

const Blog = () => (
  <div className="container border shadow mt-4">
    <CardColumns className="borde_acordion">

      <Card className="estilo_card">
        <Card.Body>
          <Card.Title className="estilo_letra_Cinzel">Card title that wraps to a new line</Card.Title>
          <Card.Text className="estilo_letra_Gruppo">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Accordion defaultActiveKey="0">
          <Card border="0">
            <Card.Header className="card_acordion">
              <Accordion.Toggle as={Button} variant="link" eventKey="1" className="estilo_letra_Cinzel">
                Leer más!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="cuerpo_card_acordion estilo_letra_Gruppo">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>


      <Card className="p-3 estilo_card">
        <blockquote className="blockquote mb-0 card-body">
          <p className="estilo_letra_Gruppo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
        <Accordion defaultActiveKey="0">
          <Card border="0">
            <Card.Header className="card_acordion">
              <Accordion.Toggle as={Button} variant="link" eventKey="1" className="estilo_letra_Cinzel">
                Leer más!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="cuerpo_card_acordion estilo_letra_Gruppo">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>



      <Card className="text-center p-3 estilo_card">
        <blockquote className="blockquote mb-0 card-body">
          <p className="estilo_letra_Gruppo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
        <Accordion defaultActiveKey="0">
          <Card border="0">
            <Card.Header className="card_acordion">
              <Accordion.Toggle as={Button} variant="link" eventKey="1" className="estilo_letra_Cinzel">
                Leer más!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="cuerpo_card_acordion estilo_letra_Gruppo">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>


      <Card className="text-center estilo_card">
        <Card.Body>
          <Card.Title className="estilo_letra_Cinzel">Card title</Card.Title>
          <Card.Text className="estilo_letra_Gruppo">
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
        <Accordion defaultActiveKey="0">
          <Card border="0">
            <Card.Header className="card_acordion">
              <Accordion.Toggle as={Button} variant="link" eventKey="1" className="estilo_letra_Cinzel">
                Leer más!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="cuerpo_card_acordion estilo_letra_Gruppo">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>


      <Card className="text-right estilo_card">
        <blockquote className="blockquote mb-0 card-body">
          <p className="estilo_letra_Gruppo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
        <Accordion defaultActiveKey="0">
          <Card border="0">
            <Card.Header className="card_acordion">
              <Accordion.Toggle as={Button} variant="link" eventKey="1" className="estilo_letra_Cinzel">
                Leer más!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="cuerpo_card_acordion estilo_letra_Gruppo">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>


      <Card className="estilo_card">
        <Card.Body>
          <Card.Title className="estilo_letra_Cinzel">Card title that wraps to a new line</Card.Title>
          <Card.Text className="estilo_letra_Gruppo">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Accordion defaultActiveKey="0">
          <Card border="0">
            <Card.Header className="card_acordion">
              <Accordion.Toggle as={Button} variant="link" eventKey="1" className="estilo_letra_Cinzel">
                Leer más!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="cuerpo_card_acordion estilo_letra_Gruppo">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>



      </CardColumns>



  </div>
)

export default Blog
