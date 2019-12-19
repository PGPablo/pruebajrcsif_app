import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Topbar from './componentes/base/Topbar';
import Downbar from './componentes/base/Footer';
import Contbar from './componentes/base/Contactbar';
import Home from './componentes/inicio/Cont_inicio';
import About from './componentes/About';
import Services from './componentes/Services';
import Blog from './componentes/blog/blog';
import Clients from './componentes/clients/Clients';



import './estilos/App.css'

class App extends Component {

  render() {
    return (
      <div className="App color_fondo">
        <Topbar />
        <header className="App-header">
          <Contbar />
        </header>
        <div>
          <Router>
            <Route path="/home" component={Home}/>
            <Route exact path="/" render={() => (
              <Redirect
                to='/home'
              />
            )}
            />
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/clients" component={Clients}/>

          </Router>
        </div>
        <Downbar/>
      </div>
    );
  }
}
export default App;
