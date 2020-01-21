/*
  Componente barra de contacto
  ########################################################################
  Barra de contacto, muestra mails y telefonos de  contacto
  ########################################################################
  Pablo Pérez Gurriz
  12/2019
*/

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../estilos/Contactbar.css'

  const Contbar = () => (
    <div className="contenedor color-letra estilo_letra_Gruppo">

      <div className="izquierda">
      </div>
      <div className="centro">
      </div>

      <div className="derecha">
        <span className="navbar-text">
          <FontAwesomeIcon icon={['fas', 'envelope']} />
          <a href="mailto:info@jrcsifmexico.com" className="color-letra"> info@jrcsifmexico.com</a> &nbsp;| &nbsp;
        </span>
        <span className="navbar-text">
          <FontAwesomeIcon icon={['fas', 'phone']} />
          <a href="tel:4612164359" className="color-letra"> 461 216 4359</a>
        </span>
      </div>
    </div>
  )


  export default Contbar;
