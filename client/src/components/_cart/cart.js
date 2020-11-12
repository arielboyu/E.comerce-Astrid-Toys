import React, { useState } from "react";
import { Link } from "react-router-dom";

//cart -product cart o pedido
const Cart = () => {
  return (
    <div className="container d-flex flex-column text-center my-5 p-5 border shadow">
      <div class="">
        <h1 class="display-3">My cart</h1>
        <p class="lead">
          Aun no tienes productos agregados, visita nuestro sección de productos
          para empezar a comprar
        </p>
        <hr class="my-2" />
        <p class="lead">
          <Link to="/products" className="text-decoration-none">
            <button class="btn btn-primary btn-lg my-5">
              CONTINUE SHOPPING{" "}
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Cart;

/*------

   <button id="boton-vaciar" class="btn btn-danger m-2">
          Empty Cart
        </button>
        
     Carrito --> get. para traer datos. Se llena con una tabla de pedidos.
    (get = query = ir a la tabla = obtener datosTabla) SELECT * FROM ('pedidos') --> me traigo toda la tabla (BD)
    listaadoProductos = setear el estado con lo que traigo del get. 
    mapear =setear estado local = el get devuelve array y este useState. useffect (is behind th scene /set my state local)
 
    render( mapear pedidos --> 
        mostrarlos por pantalla como tabla
        productos --> tabla button onClick()=> { } eliminarProducto(x) 
    )

    boton Vaciar carrito --> elimina contenido de la tabla. deleteItems  (devuelve el stock)
    boton comprar -->  vaciar tabla pedidos (resta productos del stock)
 
    pedidos -->*/
