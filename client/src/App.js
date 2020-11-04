import React from 'react';
import './App.css';

/*Importaciones de componentes*/ 
/*Componente Catalogo*/
import Catalogo from './components/catalogo/catalogo';
/*Componente Navbar*/



function App() {
  return (
      <div className="App">
        <h1>Astrid Toy's</h1>
        <Catalogo/>
      </div>
  );
}

export default App;