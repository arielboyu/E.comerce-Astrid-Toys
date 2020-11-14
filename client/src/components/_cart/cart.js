import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

//cart -product cart o pedido
const Cart = () => {
  const [cart, setCart] = useState([]);
  var userId = 2;

  const getCart = axios.get(`http://localhost:3002/users/${userId}/cart`);

  useEffect(() => {
    getCart.then((res) => {
      setCart(res.data);
    });
    console.log(cart);
  }, []);

  const handlerDelete = (producId)=> {

  const deleteItem = axios.delete(`http://localhost:3002/users/${userId}/cart/${producId}`);
  }

  return (

    <>
      <div className="container d-flex flex-column text-center my-5 p-5 border shadow">
        <div class="">
          <h1 class="display-3">My cart</h1>
          { cart.length > 0 ? (
            <table>
              <tr>
                <th className="m-2">Name</th>
                <th>Price</th>
                <th className="m-2">Quantity</th>
                <th>Description</th>
                <th>Delete Item</th>
              </tr>
              {cart.map((cart, i) => (
                  <tr>
                    <td>{cart.products[i].name}</td>
                    <td>{cart.products[i].orderdetails.price}</td>
                    <td>{cart.products[i].orderdetails.quantity}</td>
                    <td>{cart.products[i].description}</td>
                    <td><button onClick={(handlerDelete)}>x</button> </td>
                  </tr>
              ))} 
            </table>
          ) : (
            <p class="lead">
              Aun no tienes productos agregados, visita nuestro sección de
              productos para empezar a comprar
            </p>
          )}
          <hr class="my-2" />
          <p class="lead">
            <Link to="/products" className="text-decoration-none">
              <button class="btn btn-primary btn-lg my-5">
                CONTINUE SHOPPING{" "}
              </button>
              <p class="text-right">Total: ,00<span id="total"></span>$</p>
                <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
            </Link>
          </p>
        </div>
      </div>
    </>
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
