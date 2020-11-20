import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProductToCart,
  removeAllProductsToCart,
  calculeAllCart,
  addQuantity,
  subQuantity,
} from "../../redux/actions/actions";
import Style from "./cart.css";
import ButtonPay from '../_btnPay/btnPay'

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
  };

  const handlerSubQuantity = (f) => {
    if (f.cant >1){
      dispatch(subQuantity(f));
      setList(!isUpdateList);
    }
  };
  /*const handlerCalculeAll = (f) => {
    dispatch(calculeAllCart());
    setList(!isUpdateList);
  };*/

  return (
    <>
      <div className="container d-flex flex-column text-center my-5 p-5 border shadow">
        <h1 className="display-3 mb-4">My cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className="row headCont">
            <div className="col-4 col-md-8">
              <span>Items:</span>
            </div>
            <div className="col-4 col-md-2">
              <span>QTY:</span>
            </div>
            <div className="col-4 col-md-2">
              <span>Price:</span>
            </div>
          </div>
        )}
        {cart.map((f) => (
          <div className="row headCont">
            <div className="col-4 col-md-4 imageCont">
              <img style={{maxWidth: "100px"}} src={f.image} alt={`Picture of ${f.name}`} />
            </div>
            <div className="col-8 col-md-2">
              <h3>{f.name}</h3>
            </div>
            <div className="col-4 col-md-2">
              <button
                style={{outline: "none"}}
                className="btnTrash"
                onClick={() => handlerRemove(f)}
                type="button"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
            <div className="col-4 col-md-2">
              <div className="pillContainer">
                <button
                  style={{outline: "none"}}
                  className="btnMin"
                  onClick={() => handlerSubQuantity(f)}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="cant">{f.cant}</span>
                <button
                  className="btnMax"
                  style={{outline: "none"}}
                  onClick={() => handlerAddQuantity(f)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="priceCeld col-4 col-md-2">
              <p>$ {f.cant * f.price},00</p>
            </div>
          </div>
        ))}
        {cart.length !== 0 ? <ButtonPay/> : <></>}
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
