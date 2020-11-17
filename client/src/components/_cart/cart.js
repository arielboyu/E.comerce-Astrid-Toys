import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProductToCart , removeAllProductsToCart, calculeAllCart, addQuantity, subQuantity } from "../../redux/actions/actions";

import { Link } from "react-router-dom";

//cart -product cart o pedido
const Cart = () => {
  const [cart, setCart] = useState([]);
  // var userId = 2;

  // const getCart = axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/cart`);

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

  const handlerAddQuantity = (f) => {
    dispatch(addQuantity(f));
    setList(!isUpdateList);
  }
  
  const handlerSubQuantity = (f) => {
    dispatch(subQuantity(f));
    setList(!isUpdateList);
  }
  /*const handlerCalculeAll = (f) => {
    dispatch(calculeAllCart());
    setList(!isUpdateList);
  };*/

  return (
    <>
    
      <div className="container d-flex flex-column text-center my-5 p-5 border shadow">

          <h1 className="display-3">My cart</h1>
          {cart.map((f) => (
            <div className="row">
              <div className="col-sm-4">
                <img src={f.image} alt={`Picture of ${f.name}`}/>
                
              </div>
            </div>
          ))}


          {/* esta el ex code abajo */}
          <hr className="my-2" />
          <p className="lead">
            <Link to="/products" className="text-decoration-none">
              <button className="btn btn-danger btn-lg my-5">
                CONTINUE SHOPPING{" "}
              </button>
            </Link>
          </p>

      </div>
    </>
  );
};

export default Cart;


/*
{cart.length > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th className="m-2">Name</th>
                    <th>Price</th>
                    <th>Cant</th>
                    <th>Description</th>
                    <th>Delete Item</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                   {console.log(cart)} 
                  {cart.map((f) => (
                    <tr>
                      <td>{f.name}</td>
                      <td>{f.price}</td>
                      <td>
                          <div className="input-group d-flex justify-content-center">
                                <span className="input-group-btn">
                                    <button onClick={()=>handlerSubQuantity(f)} id='minus' type="button" className="quantity-left-minus btn btn-outline-danger btn-sm btn-number" data-type="minus" data-field="">
                                      <span className="glyphicon glyphicon-minus">-</span>
                                    </button>
                                </span>
                                <div className="col-xs-6 col-md-4">
                                  <input type="text" id="quantity" name="quantity" className="form-control input-number disabled" value={f.cant} min="1" max="100"/>
                                </div>
                                <span className="input-group-btn">
                                    <button onClick={()=>handlerAddQuantity(f)} id='plus' type="button" className="quantity-right-plus btn btn-outline-success btn-sm btn-number" data-type="plus" data-field="">
                                        <span className="glyphicon glyphicon-plus">+</span>
                                    </button>
                                </span>
                          </div>
                      </td>      
                   <td>{f.cant}</td> 
                      <td>{f.description}</td>
         
                      <td>
                        <button onClick={() => handlerRemove(f)} type="button"> 
                        <ion-icon class="fa fa-trash-o" aria-hidden="true"></ion-icon>
                       </button>
                      </td>
                      <td>
                      <div class="total"> ${f.cant * f.price},00</div>
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
        */