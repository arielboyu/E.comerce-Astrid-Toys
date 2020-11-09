//import React from 'react';
import React, { useState } from "react";
import {Link} from "react-router-dom";

//let carrito = [];

//cart -product cart o pedido   
    const Cart = () => {
        const [cart, setCart]= useState([
            {
              id: 1,
              name: "Harry Potter",
              description: "Un funko de Harry Potter",
              price: 99,
              stock: 89,
              image: null,
              active: true
            },
            {
              id: 2,
              name: "Spiderman",
              description: "Un funko de Spiderman",
              price: 80,
              stock: 16,
              image: null,
              active: true
            },
            {
              id: 3,
              name:" Hulk",
              description:" Un funko de Hulk",
              price: 42,
              stock: 51,
              image: null,
              active: true
            },
            {
              id: 4,
              name: "Tai",
              description: "Un funko de Tai",
              price: 10,
              stock: 5,
              image: null,
              active: true
            },
            {
              id: 5,
              name: "Bart",
              description: "Un funko de Bar",
              price: 54,
              stock: 53,
              image: null,
              active: true
            },
            {
              id: 6,
              name: "Capitan",
              description: "Serie",
              price: 38,
              stock: 76,
              image: null,
              active: true
            }]);

        /*function addCart() { 
            setCart('My Shopping Cart');
         }*/
      if(cart) {
        return (
            <table>
                {cart.map((function) => (
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Units</th>
                    <th>Description</th>
                    <th>Delete Item</th>
                    </tr>
                )  
            )       
                  <button onClick ={() => addCart() } id="boton-vaciar" class="btn btn-danger m-2">Add to Cart</button>
                  <h1> {cart} </h1>
          
                  <button id="boton-vaciar" class="btn btn-danger m-2">Empty Cart</button>
                     <h1> My Cart is empty</h1>
              </table>  
          )
      }
    
     export default Cart;


    /* Carrito --> get. para traer datos. Se llena con una tabla de pedidos.
    (get = query = ir a la tabla = obtener datosTabla) SELECT * FROM ('pedidos') --> me traigo toda la tabla (BD)
    listaadoProductos = setear el estado con lo que traigo del get. 
    mapear =setear estado local = el get devuelve array y este useState. useffect (is behind th scene /set my state local)
 
    render( mapear pedidos --> 
        mostrarlos por pantalla como tabla
        productos --> tabla button onClick()=> { } eliminarProducto(x) 
    )

    boton Vaciar carrito --> elimina contenido de la tabla. deleteItems  (devuelve el stock)
    boton comprar -->  vaciar tabla pedidos (resta productos del stock)
 
    pedidos --> */