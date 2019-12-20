// LIBS
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Jumbotron, Container, Card, Button, Accordion}  from 'react-bootstrap'

// ASSETS
import '../../estilos/Blog.css'

const Blog = () => (
  <div className="container border shadow mt-4">
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Jumbotron fluid>
            <Container>
              <h1>Fluid jumbotron</h1>
              <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
              </p>
            </Container>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Jumbotron>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h3> Fecha y departamento  </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
)

export default Blog
