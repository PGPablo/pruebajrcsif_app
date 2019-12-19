// LIBS
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ASSETS
import '../estilos/Services.css'

const Services = () => (
  <div className="container border shadow mt-4">
    <section id="fh5co-services" data-section="services">
  		<div class="container">
  			<div class="row">
  				<div class="col-md-12 section-heading text-left">
  					<h2 class=" left-border to-animate">Services</h2>
  					<div class="row">
  						<div class="col-md-8 subtext to-animate">
  							<h3>Encumbered forever by desire and ambition. There's a hunger still unsatisfied!</h3>
  						</div>
  					</div>
  				</div>
  			</div>
        <br /><br />
  			<div class="row">
  				<div class="col-md-6 col-sm-6 fh5co-service to-animate">
  					<FontAwesomeIcon
            className="color_icono"
            size='6x'
            icon={['fas', 'blind']} />
  					<h3>Asesoría: Contable - Fiscal.</h3>
  					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
  				</div>
  				<div class="col-md-6 col-sm-6 fh5co-service to-animate">
  					<FontAwesomeIcon
            className="color_icono"
            size='6x'
            icon={['fas', 'anchor']} />
  					<h3>Administración de Negocios.</h3>
  					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
  				</div>

  				<div class="clearfix visible-sm-block"></div>

  				<div class="col-md-6 col-sm-6 fh5co-service to-animate">
  					<FontAwesomeIcon
            className="color_icono"
            size='6x'
            icon={['fab', 'earlybirds']} />
  					<h3>Investigación de Mercados.</h3>
  					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
  				</div>
  				<div class="col-md-6 col-sm-6 fh5co-service to-animate">
  					<FontAwesomeIcon
            className="color_icono"
            size='6x'
            icon={['fab', 'qq']} />
            <h3>Consultoría Administrativa</h3>
  					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
  				</div>

          <div class="clearfix visible-sm-block"></div>

  				<div class="col-md-6 col-sm-6 fh5co-service to-animate">
  					<FontAwesomeIcon
            className="color_icono"
            size='6x'
            icon={['fab', 'pushed']} />
  					<h3>Recursos Humanos.</h3>
  					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
  				</div>

  			</div>
  		</div>
  	</section>
  </div>
)

export default Services
