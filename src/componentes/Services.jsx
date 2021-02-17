// LIBS
import React from 'react'
import {Button}  from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

import '../estilos/Services.css'

const Services = () => (
  <div className="container border shadow mt-4 pl-0 pr-0">


  <div className="w-100 fondo_logo_services">
    <h1 className="Services_Titulo" >Servicios</h1>
    <h3 className="Services_Subtitulo" >Dentro de nuestro catálogo de servicios puedes encontrar:</h3>
  </div>


    <section id="fh5co-services" data-section="services">
  		<div className="container">

  			<div className="row">
  				<div className="col-md-6 col-sm-6 fh5co-service to-animate-1 interlineado">
            <ScrollAnimation animateIn="bounceInLeft">
              <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Asesoría: Contable - Fiscal.</h3>
              <p className="estilo_letra_Gruppo">Diseñamos e implementamos un sistema contable de acuerdo a las
                necesidades de cada cliente basándonos en la normativa vigente,
                proporcionando información oportuna y eficiente. Hoy en día nos
                encontramos en un constante cambio por lo cual ofrecemos
                estrategias fiscales debidamente fundamentadas para optimizar la
                carga financiera de su negocio</p>
              <Button href="/contact" className="estilo_boton estilo_letra_Gruppo" variant="outline-info">Contacto</Button>
          </ScrollAnimation>
          </div>

  				<div className="col-md-6 col-sm-6 fh5co-service to-animate-2 interlineado">
            <ScrollAnimation animateIn="bounceInRight">
              <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Administración de Negocios.</h3>
              <p className="estilo_letra_Gruppo">Nos encargamos de planificar, organizar y dirigir el control de sus
              recursos , para obtener un máximo rendimiento de su capital
              humano, recursos financieros , materiales y tecnológicos , De esta
              manera ayudarlo al logro de sus objetivos.</p>
              <Button href="/contact" className="estilo_boton estilo_letra_Gruppo" variant="outline-info">Contacto</Button>
            </ScrollAnimation>
          </div>

  				<div className="clearfix visible-sm-block"></div>

  				<div className="col-md-6 col-sm-6 fh5co-service to-animate-3 interlineado">
            <ScrollAnimation animateIn="bounceInLeft">
              <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Investigación de Mercados.</h3>
              <p className="opacidad estilo_letra_Gruppo">Coordinamos y ejecutamos un conjunto de técnicas para la
                recopilación y análisis del estudio de mercados nacionales e
                internacionales, garantizando su efectividad de acuerdo a las
                diferentes variables del mercado. Obteniendo información estadística
                para la toma de decisiones en futuras inversiones.
                </p>
              <Button href="/contact" variant="outline-info estilo_letra_Gruppo">Contact</Button>
            </ScrollAnimation>
          </div>
  				<div className="col-md-6 col-sm-6 fh5co-service to-animate-4 interlineado">
            <ScrollAnimation animateIn="bounceInRight">
              <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Consultoría Administrativa</h3>
              <p className="opacidad estilo_letra_Gruppo">Con el fin de llevar acabo los procedimientos adecuados para el
                funcionamiento de su empresa acompañamos a nuestros clientes en
                el trayecto, brindándoles manuales de organización en conjunto con
                un control interno, analizando sus procesos y realizando una re
                estructuración corporativa de ser necesario.
              </p>
              <Button href="/contact" className="estilo_boton estilo_letra_Gruppo" variant="outline-info">Contacto</Button>
            </ScrollAnimation>
          </div>

          <div className="clearfix visible-sm-block"></div>

  				<div className="col-md-6 col-sm-6 fh5co-service to-animate-5 interlineado">
          <ScrollAnimation animateIn="bounceInLeft">
            <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Recursos Humanos.</h3>
            <p className="opacidad estilo_letra_Gruppo">Apoyamos en el proceso de reclutamiento, selección y contratación,
              cubriendo el perfil con la persona idónea, además le brindamos
              asesoría para la incorporación del nuevo personal, integración y
              motivación.Creamos de acuerdo a sus necesidades estrategias
              salariales, beneficios y prestaciones de sus empleados, con todo lo
              que conlleva y procurando la satisfacción de los trabajadores en pro
              de la empresa.</p>
            <Button href="/contact" className="estilo_boton estilo_letra_Gruppo" variant="outline-info">Contacto</Button>
          </ScrollAnimation>

          </div>
          <div className="col-md-6 col-sm-6 fh5co-service to-animate-6 interlineado">
            <ScrollAnimation animateIn="bounceInRight">
              <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Asesoría Legal.</h3>
              <p className="opacidad estilo_letra_Gruppo">Contamos con la orientación y asistencia relacionada al entorno
                laboral, corporativo y fiscal, con la correcta atención de
                profesionales especializados en eventualidades que surjan.
                Permaneciendo siempre dentro de un marco legal y de
                confidencialidad brindando la seguridad y tranquilidad que se
                merecen nuestros clientes.
              </p>
              <Button href="/contact" className="estilo_boton estilo_letra_Gruppo" variant="outline-info">Contacto</Button>
            </ScrollAnimation>
          </div>

          <div className="clearfix visible-sm-block"></div>

  				<div className="col-md-6 col-sm-6 fh5co-service to-animate-7 interlineado">
            <ScrollAnimation animateIn="bounceInLeft">
              <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Marketing.</h3>
              <p className="opacidad estilo_letra_Gruppo">Con la finalidad de beneficiar a nuestros clientes satisfaciendo al
                usuario final, gestionamos las actividades necesarias para lograr
                posicionarnos en la mente del comprador esto considerando el
                comportamiento de mercados , usuarios y/o consumidores.
              </p>
              <Button href="/contact" className="estilo_boton estilo_letra_Gruppo" variant="outline-info">Contacto</Button>
            </ScrollAnimation>
          </div>
          <div className="col-md-6 col-sm-6 fh5co-service to-animate-8 interlineado">
            <ScrollAnimation animateIn="bounceInRight">
              <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Asesoría Financiera.</h3>
              <p className="opacidad estilo_letra_Gruppo">Ayudamos a tomar decisiones económicas, proveemos información
                que permita evaluar el desenvolvimiento de la empresa
                proporcionando elementos para estimar el comportamiento futuro
                de los flujos de efectivo.
              </p>
              <Button href="/contact" className="estilo_boton estilo_letra_Gruppo" variant="outline-info">Contacto</Button>
            </ScrollAnimation>
          </div>
          <div className="clearfix visible-sm-block"></div>

  				<div className="col-md-6 col-sm-6 fh5co-service to-animate-9 interlineado">
            <ScrollAnimation animateIn="bounceInLeft">
              <h3 className="interlineado_top opacidad estilo_letra_Cinzel color_titulo">Capacitación Empresarial</h3>
              <p className="opacidad estilo_letra_Gruppo">Capacitaciones enfocadas al desarrollo humano desde los altos
                directivos , mandos medios, lideres y todo aquel personal que lo
                requiera. Con el propósito de mejorar los conocimientos, actitudes
                y/o capacidades profesionales para incrementar el desempeño de
                las actividades dentro de la organización.</p>
              <Button href="/contact" className="estilo_boton estilo_letra_Gruppo" variant="outline-info">Contacto</Button>
            </ScrollAnimation>
          </div>

  			</div>
  		</div>
  	</section>
  </div>
)

export default Services
