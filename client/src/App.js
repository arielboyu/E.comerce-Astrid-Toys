import React from 'react';
import './App.css';

/*Importaciones de componentes*/ 
/*Componente Catalogo*/
import Catalogo from './components/catalogo/catalogo';
/*Componente Navbar*/


function App() {
  return (
      <div className="App container bg-info p-5 ">
        <div className="row flex-direction-row">
          <div className="col-3 bg-dark p-5">
            <h1 className="pl-3">LOGO</h1>
          </div>
          <div className="col-9 bg-dark p-5">
            <h1>ASTRID TOY'S</h1>
          </div>
          <div className="col-12 bg-success p-2 text-center">
            <h3>soy un NAAAAAAAAAAAAAVBAR</h3>
          </div>
          
          
          <div className="col-3 bg-warning p-5">
            <div className="pl-3">FILTROS<Catalogo/></div>
          </div>
          <div className="col-9 bg-warning p-5">
            CATALOGO de PRODUCTOS<Catalogo/>
          </div>
          <div className="col-12 bg-danger text-center">
            FOOTER
          </div>
        </div>
      </div>
  );
}

export default App;