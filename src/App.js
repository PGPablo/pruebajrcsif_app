import React from 'react';
import Topbar from './componentes/base/Topbar';
import Carousel_inicio from './componentes/inicio/Carousel';
import Cards_inicio from './componentes/inicio/Contenido';
import Downbar from './componentes/base/Footer'
import Contbar from './componentes/base/Contactbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar />
        <Contbar />
        <Carousel_inicio />
        <Cards_inicio />
        <Downbar/>
      </header>
    </div>
  );
}

export default App;
