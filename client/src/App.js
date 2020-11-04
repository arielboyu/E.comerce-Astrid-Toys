import React, {Fragment} from 'react';
import './App.css';
import Producto from './components/formularioProducto/formularioProducto';

function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>Astrid Toy's</h1>
        <Producto ></Producto>
      </div>
    </Fragment>
  );
}

export default App;