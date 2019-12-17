// LIBS
import React from 'react'

// ASSETS
import '../../estilos/About.css'

const Home = () => (
  <div>
    <section className="sectionAbout">
      <div className="container border shadow mt-4">

        <div id="features" className="container py-4 py-lg-6">
          <h1 className="text-uppercase font-weight-bold my-0 fondoSeccion">
            <span className="naranja">ACS</span>
          </h1>
          <h5 className="font-weight-light mt-2 mb-0 text-muted">
            Bienes Raices
          </h5>

          <div className="row text-center mt-3">
            <div className="ml-2 container-fluid fondoSeccion">
              <h3 className="">¿Quiénes somos?</h3>
            </div>
            <div className="imgCover">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
              </p>
              <img src="https://picsum.photos/200/300/?blur" alt="Buu!" className=""/>
            </div>
          </div>

          <hr />

          <div className="row text-center mt-3">
            <div className="ml-2 container-fluid fondoSeccion">
              <h3 className="">¿A dondé queremos llegar?</h3>
            </div>
            <div className="containter-fluid">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
              </p>
              <img src="https://picsum.photos/200/300/?blur" alt="Buu!" className=""/>
            </div>
          </div>

          <hr />

          <div className="row text-center mt-3">
            <div className="ml-2 container-fluid fondoSeccion">
              <h3 className="">¿Cómo lo estamos logrando?</h3>
            </div>
            <div className="containter-fluid">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
              </p>
              <img src="https://picsum.photos/200/300/?blur" alt="Buu!" className=""/>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="mt-3">
      <div className="container">
        <h3 className="text-center text-uppercase font-weight-bold my-0">
          <span className="naranja">Visita Nuestras Oficinas.</span>
        </h3>
        <div className="text-center text-uppercase my-0">
          <span>Carretera Panamericana <br/> Col. Tresguerras CP 38080 | Celaya, Guanajuato.</span>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.742437753969!2d-100.78829907493699!3d20.516782105524666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cb0883bb41c71%3A0x7328b51aad3d9f8f!2sINTERSERV!5e0!3m2!1ses-419!2smx!4v1566833904904!5m2!1ses-419!2smx"
            width="100%" height="400px" frameborder="0" style={{border:0}} allowfullscreen="" title="ej"></iframe>
        </div>
      </div>
    </section>
  </div>


)

export default Home
