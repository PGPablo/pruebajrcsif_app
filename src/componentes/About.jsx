// LIBS
import React from 'react'
import logo from '../assets/img/logot.png'

// ASSETS
import '../estilos/About.css'

const About = () => (
  <div>
    <section className="sectionAbout">
      <div className="container border shadow mt-4">
      <div className="row fondo-logo">
        <img src={logo} alt="MDN" className="tamaño-logo"/>
      </div>

        <div id="features" className="container py-4 py-lg-6">
          <div className="row text-center mt-3">
          <div className="col-3">
            <div className="ml-2 container-fluid fondoSeccion">
              <h3 className="estilo_letra_Cinzel color_titulo">¿Quiénes somos?</h3>
            </div>
          </div>
          <div className="col-9">
            <div className="containter-fluid">
              <p className="estilo_letra_Poiret color_letras">
              Ofrecer la mejor experiencia en calidad e innovacion a cada uno de nuestros
                clientes, en servicios administrativos, contables, legales, financieros y de
                consultoría, así como cualquier otra actividad que nos permita proporcionar un
                servicio integral y ser una empresa comprometida con la mejora constante,
                brindando satisfacción y confianza a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
          <div id="features" className="container py-4 py-lg-6">
            <div className="row text-center mt-3">
              <div className="col-9">
                <div className="containter-fluid">
                  <p className="estilo_letra_Poiret color_letras">
                  Nuestro proposito es ofrecer la mejor experiencia en calidad e innovacion a cada uno de nuestros
                    clientes, en servicios administrativos, contables, legales, financieros y de
                    consultoría, así como cualquier otra actividad que nos permita proporcionar un
                    servicio integral y ser una empresa comprometida con la mejora constante,
                    brindando satisfacción y confianza a nuestros clientes.
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="ml-2 container-fluid fondoSeccion">
                  <h3 className="estilo_letra_Cinzel color_titulo">¿A dónde queremos llegar?</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center mt-3">
            <div className="ml-2 container-fluid fondoSeccion">
              <h3 className="estilo_letra_Cinzel color_titulo">¿Cómo lo estamos logrando?</h3>
            </div>
            <div className="containter-fluid">
              <p className="estilo_letra_Poiret color_letras">
              Lograr con un alto sentido de compromiso en conjunto con nuestros valores
                principales posicionarnos como una empresa confiable, competitiva y lider en
                cada vez mas sectores economicos.
                Con una visión global ante la nueva economia apoyar e impulsar a cada uno de
                nuestros clientes a consolidarse, generando seguridad y tranquilidad
                empresarial.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>


)

export default About
