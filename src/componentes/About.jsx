// LIBS
import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll';

import '../estilos/About.css'
import logo from '../assets/img/logot.png'

const About = () => (
  <div>
    <section className="sectionAbout">
      <div className="container border shadow mt-4">
        <div className="row fondo-logo">
          <img src={logo} alt="MDN" className="tamaño-logo"/>
        </div>

        <div id="features" className="container py-4 py-lg-6">
          <div className="row text-center mt-3">
          <div className="col-12">
            <div className="ml-2 container-fluid fondoSeccion">
              <ScrollAnimation animateIn="bounceInRight">
                <h3 className="estilo_letra_Cinzel color_titulo">¿Quiénes somos?</h3>
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-12">
            <div className="containter-fluid">
              <ScrollAnimation animateIn="bounceInLeft">
                <p className="estilo_letra_Poiret color_letras">
                Ofrecer la mejor experiencia en calidad e innovación a cada uno de nuestros
                  clientes, en servicios administrativos, contables, legales, financieros y de
                  consultoría, así como cualquier otra actividad que nos permita proporcionar un
                  servicio integral y ser una empresa comprometida con la mejora constante,
                  brindando satisfacción y confianza a nuestros clientes.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
          <div id="features" className="container py-4 py-lg-6">
            <div className="row text-center mt-3">
              <div className="col-12">
                <div className="ml-2 container-fluid fondoSeccion">
                  <ScrollAnimation animateIn="bounceInRight">
                    <h3 className="estilo_letra_Cinzel color_titulo">¿A dónde queremos llegar?</h3>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="col-12">
                <div className="containter-fluid">
                  <ScrollAnimation animateIn="bounceInLeft">
                    <p className="estilo_letra_Poiret color_letras">
                    Nuestro proposito es ofrecer la mejor experiencia en calidad e innovación a cada uno de nuestros
                      clientes, en servicios administrativos, contables, legales, financieros y de
                      consultoría, así como cualquier otra actividad que nos permita proporcionar un
                      servicio integral y ser una empresa comprometida con la mejora constante,
                      brindando satisfacción y confianza a nuestros clientes.
                    </p>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center mt-3">
            <div className="ml-2 container-fluid fondoSeccion">
              <ScrollAnimation animateIn="bounceInRight">
                <h3 className="estilo_letra_Cinzel color_titulo">¿Cómo lo estamos logrando?</h3>
              </ScrollAnimation>
            </div>
            <div className="containter-fluid">
              <ScrollAnimation animateIn="bounceInLeft">
                <p className="estilo_letra_Poiret color_letras">
                Lograr con un alto sentido de compromiso en conjunto con nuestros valores
                  principales posicionarnos como una empresa confiable, competitiva y lider en
                  cada vez mas sectores economicos.
                  Con una visión global ante la nueva economia apoyar e impulsar a cada uno de
                  nuestros clientes a consolidarse, generando seguridad y tranquilidad
                  empresarial.
                </p>
              </ScrollAnimation>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>


)

export default About
