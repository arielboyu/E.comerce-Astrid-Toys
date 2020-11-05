import React, { useEffect, useState } from "react";
import Category from "../Category/category";


const Producto = () => {
  const [optionState,setOption] = useState('create')
  function optionHandler(option){
    setOption(option.value);
  };
  useEffect(()=>{
    // setOption(option.value);
    console.log('hola')
  },[])
  return (
      <form>
        <select onChange={optionHandler}>
          <option value='create'>Cargar producto</option>
          <option value='update'>Modificar producto</option>
          <option value='delete'>Eliminar producto</option>
        </select>
        <div>
          {optionState==='create'?<InputCreate/>}
          {optionState==='create'?<InputUpdate/>}
          {optionState==='create'?<InputDelete/>}         
        </div>
        
        <button type='submit'>Realizar</button>
        <Category>
          {/* El formulario debe poder:
              -Agregarle una o mas categorias al producto que estamos cargando
              -Eliminar una categoria en el caso de que nos hayamos equivocado */}
        </Category>
      </form>
  );
};

export default Producto;
