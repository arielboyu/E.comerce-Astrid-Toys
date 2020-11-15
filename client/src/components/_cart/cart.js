import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProductToCart , removeAllProductsToCart } from "../../redux/actions/actions";

import { Link } from "react-router-dom";

//cart -product cart o pedido
const Cart = () => {
  const [cart, setCart] = useState([]);
  // var userId = 2;

  // const getCart = axios.get(`http://localhost:3002/users/${userId}/cart`);

  // useEffect(() => {
  //   getCart.then((res) => {
  //     setCart(res.data);
  //   });
  //   console.log(cart);
  // }, []);

  // Lineas agregadas por Rodri 02:45
  const [isUpdateList, setList] = useState(false);
  const cartStore = useSelector((state) => state.carrito);
  const dispatch = useDispatch();

  useEffect(() => {
    setCart(cartStore);
  }, [isUpdateList]);

  const handlerRemove = (f) => {
    dispatch(removeProductToCart(f));
    setList(!isUpdateList);
  };

  const handlerRemoveAll = (f) => {
    dispatch(removeAllProductsToCart());
    setList(!isUpdateList);
  };

  const handlerQantity = (e) => {
    if (e.target.id==='minus'){
      console.log("minus")
    }
    if (e.target.id==='plus'){
      console.log("plus")
    }
  }

  return (
    <>
      <div className="container d-flex flex-column text-center my-5 p-5 border shadow">
        <div class="">
          <h1 class="display-3">My cart</h1>
          {cart.length > 0 ? (
            <>
              <table class="table">
                <thead>
                  <tr>
                    <th className="m-2">Name</th>
                    <th>Price</th>
                    <th className="m-2">Cant</th>
                    <th>Description</th>
                    <th>DeleteItem</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(cart)} */}
                  {cart.map((f) => (
                    <tr>
                      <td>{f.name}</td>
                      <td>{f.price}</td>
                      <td>
                          <div className="input-group d-flex p-3">
                                <span className="input-group-btn">
                                    <button onClick={handlerQantity} id='minus' type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                                      <span className="glyphicon glyphicon-minus">-</span>
                                    </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="col-md-auto form-control input-number" value={f.cant} min="1" max="100"/>
                                <span className="input-group-btn">
                                    <button onClick={handlerQantity} id='plus' type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                        <span className="glyphicon glyphicon-plus">+</span>
                                    </button>
                                </span>
                          </div>
                      </td>      
                      {/* <td>{f.cant}</td> */}
                      <td>{f.description}</td>
                      <td>
                        <button onClick={() => handlerRemove(f)} type="button">
                          <ion-icon name="close-outline"></ion-icon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p class="lead">
                <button onClick={() => handlerRemoveAll()} class="btn btn-danger btn-lg my-5"><ion-icon name="trash-outline" style={{fontSize:"24px"}}/>  CLEAN CART</button>
              </p>
            </>
          ) : (
            <div className="my-4">
              <div>
                <p className="lead">Aun no tienes productos agregados.</p>
                <p className="lead">
                  Visita nuestro sección de productos para empezar a comprar.
                </p>
              </div>
            </div>
          )}
          <hr class="my-2" />
          <p class="lead">
            <Link to="/products" className="text-decoration-none">
              <button class="btn btn-danger btn-lg my-5">
                CONTINUE SHOPPING{" "}
              </button>
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
