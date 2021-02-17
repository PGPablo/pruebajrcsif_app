import React from 'react'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

import Topbar from './componentes/base/Topbar';
import Downbar from './componentes/base/Footer';
import Contbar from './componentes/base/Contactbar';
import Home from './componentes/inicio/Cont_inicio';
import About from './componentes/About';
import Services from './componentes/Services';
import Blog from './componentes/blog/Bloh';
import ContactUs from './componentes/contact/emailjs';
import LoginForm from './componentes/login/loginForm';
import Dashboard from './componentes/dashboard/dashboard'

//Estilos
import './estilos/App.css'

//Firebase 
import { auth } from './firebase'

function App() {

    const [firebaseUser, setFirebaseUser] = React.useState(false)

    React.useEffect(() => {
        const fetchUser = () => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setFirebaseUser(user)
                } else {
                    setFirebaseUser(null)
                }
            })
        }
        fetchUser()
    }, [])

    const RutaPrivada = ({ component, path, ...rest }) => {
        if (localStorage.getItem('usuario')) {
            const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
            if (usuarioStorage.uid === firebaseUser.uid) {
                return <Route component={component} path={path} {...rest} />
            } else {
                return <Redirect to="/login" {...rest} />
            }
        } else {
            return <Redirect to="/login" {...rest} />
        }
    }

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
                Este sitio web puede usar cookies. Terminos
            </CookieConsent>
            <Topbar />
            <header className="App-header">
                <Contbar />
            </header>

            {
                firebaseUser !== false ? (
                    <div>
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
                                <Route type="public" path="/login" component={LoginForm} />
                                <RutaPrivada type="private" path="/dashboard" component={Dashboard} />
                            </Switch>
                        </Router>
                    </div>

                ) : (
                    <div className="container text-center">
                        <div className="spinner-grow posicion_spinner text-info mt-5 mb-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }


            < Downbar />

            </div>
    );
}

export default App;
