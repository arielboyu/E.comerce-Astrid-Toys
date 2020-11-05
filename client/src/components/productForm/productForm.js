import React, { Fragment } from "react";
import Category from "../category/category";

const Producto = () => {
  return (
    <form>
      <select>
        <option>Cargar producto</option>
        <option>Modificar producto</option>
        <option>Eliminar producto</option>
      </select>
      <button>Realizar</button>
      <Category>
        {/* El formulario debe poder:
            -Agregarle una o mas categorias al producto que estamos cargando
            -Eliminar una categoria en el caso de que nos hayamos equivocado */}
      </Category>
    </form>
  );
};

export default Producto;
