/*
  Componente NavBar
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import {Navbar, Nav, Form, FormControl, Button}  from 'react-bootstrap'

import '../../estilos/Topbar.css'

const Topbar = () => (
  <div className="sticky-top container-fluid bg-secondary text-white p-2 text-right text-xs">

  <Navbar className="borrar" expand="lg">

    <Navbar.Brand href="#home">
      JRC SIF México S.C.
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav" inline>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Nosotros</Nav.Link>
        <Nav.Link href="#pricing">Nuestros servicios</Nav.Link>
        <Nav.Link href="#pricing">Noticias</Nav.Link>
        <Nav.Link href="#pricing">Clientes</Nav.Link>
      </Nav>

    </Navbar.Collapse>

  </Navbar>

  </div>
)

export default Topbar
