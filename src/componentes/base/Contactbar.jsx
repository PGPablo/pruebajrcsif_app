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
  import FontAwesome from 'react-fontawesome';

  import '../../estilos/Contactbar.css'

    const Contbar = () => (
              <nav class="navbar navbar-light bg-light">
                <span class="navbar-text">
                <FontAwesome
                  className='rocket'
                  name='rocket'
                  size='2x'
                  spin
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'lightblue' }}
                />
                <span className="badge bg-light-success badge-body mr-1 my-1">
                  <FontAwesomeIcon icon={['fas', 'check']} />
                </span>
                  <FontAwesomeIcon icon={['fas', 'check']} /> 461 318 9423
                  <FontAwesomeIcon icon={['fa', 'mail']} /> perez.pablo_jcjp@outlook.es
                </span>
              </nav>
          )


  export default Contbar;
