// LIBS
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Jumbotron, Button}  from 'react-bootstrap'

// ASSETS
import '../../estilos/Blog.css'

const Blog = () => (
  <div className="container border shadow mt-4">
    <Jumbotron className="posicion_jumbo color_interno_jumbo">
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </div>
)

export default Blog
