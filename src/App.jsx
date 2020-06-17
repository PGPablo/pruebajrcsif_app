import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

import Topbar from './componentes/base/Topbar';
import Downbar from './componentes/base/Footer';
import Contbar from './componentes/base/Contactbar';
import Home from './componentes/inicio/Cont_inicio';
import About from './componentes/About';
import Services from './componentes/Services';
import Blog from './componentes/blog/blog';
import ContactUs from './componentes/contact/emailjs';
import ContCliente from './componentes/clients/cont_clients';
import LoginForm from './componentes/login/index';
import GuardRoute from './componentes/root/guardRoute'
import Root from './componentes/root/root'

//Contexto
import { AuthContextProvider } from './context/auth';
import { ArchivosContextProvider } from './context/archivos'
import { GeneticaContextProvider } from './context/genetica'

//API
//import {createArchivo} from './tools/firebase'


//Estilos
import './estilos/App.css'


// import a1 from './a1.pdf'
// createArchivo({
//   nombreArchivo: "Prueba 3",
//   tipoArchivo: "Pdf",
//   fechaArchivo: Date.now(),
//   subidoporArchivo: "Pablo Pérez Gurriz",
//   archivo: a1,
// })

class App extends Component {

    render() {
        return (
            <div className="App color_fondo">

                <CookieConsent
                    location="bottom"
                    buttonText="Seguro!"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#212F3C" }}
                    buttonStyle={{ color: "#000000", fontSize: "13px", background: "#ffffff", width: "100px" }}
                    expires={150}
                >
                    Este sitio web puede usar cookies. <a href="">Terminos</a>
                </CookieConsent>
                <Topbar />
                <header className="App-header">
                    <Contbar />
                </header>
                <div><AuthContextProvider>
                    <ArchivosContextProvider>
                        <GeneticaContextProvider>
                            <Router>
                                <Switch>
                                    <Route type="public" path="/home" component={Home} />
                                    <Route exact path="/" render={() => (
                                        <Redirect
                                            to='/home'
                                        />
                                    )}
                                    />
                                    <Route type="public" path="/about" component={About} />
                                    <Route type="public" path="/services" component={Services} />
                                    <Route type="public" path="/blog" component={Blog} />
                                    <Route type="public" path="/contact" component={ContactUs} />
                                    <Root>
                                        <GuardRoute type="public" path="/login" component={LoginForm} />
                                        <GuardRoute type="private" path="/clients" component={ContCliente} />
                                    </Root>
                                </Switch>
                            </Router>


                        </GeneticaContextProvider>
                    </ArchivosContextProvider>
                </AuthContextProvider>

                </div>
                <Downbar />

            </div>
        );
    }
}
export default App;
