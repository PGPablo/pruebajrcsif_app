/*
  Componente NavBar
  ########################################################################
  Barra de Navegación, muestra rutas.
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from 'react'
import {Navbar, Nav}  from 'react-bootstrap'

import '../../estilos/Topbar.css'

const Topbar = () => (

  <div className="sticky-top container-fluid text-white p-2 text-right text-xs color_barra">

  <Navbar className="contenido_inicial" expand="lg">
    <Navbar.Brand href="#home" className="letras_logo">
      <h4 className="estilo_letra_Montserrat"> JRC SIF México S.C. </h4>
    </Navbar.Brand>

    <Navbar.Collapse>
      <Nav className="ml-auto">
        <Nav.Link href="/home" className="letras_menu estilo_letra_Gruppo letras_menu_1">Inicio</Nav.Link>
        <Nav.Link href="/about" className="letras_menu estilo_letra_Gruppo letras_menu_2">Nosotros</Nav.Link>
        <Nav.Link href="/services" className="letras_menu estilo_letra_Gruppo letras_menu_3">Nuestros servicios</Nav.Link>
        <Nav.Link href="/blog" className="letras_menu estilo_letra_Gruppo letras_menu_4">Blog</Nav.Link>
        <Nav.Link href="/contact" className="letras_menu estilo_letra_Gruppo letras_menu_5">Contacto</Nav.Link>
        <Nav.Link href="/clients" className="letras_menu estilo_letra_Gruppo letras_menu_6">Clientes</Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

  </Navbar>

  </div>
)

export default Topbar
