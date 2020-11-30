import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProductToCart,
  removeAllProductsToCart,
  addQuantity,
  subQuantity,
  setCart,
} from "../../redux/actions/actions";
import Style from "./cart.css";
import ButtonPay from "./ButtonPay/btnPay";
import { Link } from "react-router-dom";

//cart -product cart o pedido
const Cart = () => {
  const [cart, setCartLocal] = useState([]);
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
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //para arreglar lo de las ordenes
  //la logica seria:
  /*
si el usuario esta loggeado entonces:
    si existe orden pendiente muestro carrito
    sino muestro el carrito vacio
sino
    muestro el carrito redux
*/

  useEffect(() => {
    console.log("Estoy hay en carrito " + cartStore);
    //ESTE CODIGO ADAPTA LA ORDER PENDING QUE RETORNA EL BACK A UNA ORDER PENDING QUE ACEPTA
    //EL CARRITO DEL REDUX
    //----------------------------------------------------------------------------
    if (user.id !== null) {
      console.log("entro adapter");
      var array = [];
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${user.id}/cart`)
        .then((myCart) => {
          if (myCart.data) {
            console.log("ya existe una orden pendiente");
            console.log(myCart);
            myCart.data.products.forEach((product) => {
              product.cant = product.orderdetails.quantity;
              array.push(product);
            });
          }
          dispatch(setCart(array));
          console.log(array);
          setCartLocal(array);
        });
      //-----------------------------------------------------------------------------
    } else {
      setCartLocal(cartStore);
    }
  }, [isUpdateList]);

  const handlerRemove = (f) => {
    if (user.id !== null) {
      //logica base de datos "/:idUser/cart/:productId"
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/users/${user.id}/cart/${f.id}`
        )
        .then((ord) => {
          console.log("producto eliminado de la orden pendiente", ord);
          dispatch(removeProductToCart(f));
          setList(!isUpdateList);
        });
    } else {
      dispatch(removeProductToCart(f));
      setList(!isUpdateList);
    }
  };

  const handlerRemoveAll = (f) => {
    if (user.id !== null) {
      //LOGICA BASE DE DATOS:
      axios
        .delete(`${process.env.REACT_APP_API_URL}/users/${user.id}/cart`)
        .then((r) => {
          console.log("Carrito vaciado en DB");
          console.log(r);
          dispatch(removeAllProductsToCart());
          setList(!isUpdateList);
        });
    } else {
      dispatch(removeAllProductsToCart());
      setList(!isUpdateList);
    }
  };

  const handlerAddQuantity = (f) => {
    console.log(f);
    if (f.stock > 0) {
      if (user.id !== null) {
        if (f.cant < f.stock) {
          ///:order/:id <=== order = orderId id = productId
          var qty = { quantity: 1 };
          axios
            .get(`${process.env.REACT_APP_API_URL}/users/${user.id}/cart`)
            .then((mycart) => {
              console.log("my cart to add qty: ", mycart);
              axios
                .put(
                  `${process.env.REACT_APP_API_URL}/users/${mycart.data.id}/${f.id}`,
                  qty
                )
                .then((r) => {
                  console.log(r);
                  dispatch(addQuantity(f));
                  setList(!isUpdateList);
                });
            });
        }
      } else {
        console.log("Pase re tranqui piola por el else");
        dispatch(addQuantity(f));
        setList(!isUpdateList);
      }
    }
  };

  const handlerSubQuantity = (f) => {
    if (f.cant > 1) {
      if (user.id !== null) {
        ///:order/:id <=== order = orderId id = productId
        var qty = { quantity: -1 };
        axios
          .get(`${process.env.REACT_APP_API_URL}/users/${user.id}/cart`)
          .then((mycart) => {
            console.log("my cart to add qty: ", mycart);
            axios
              .put(
                `${process.env.REACT_APP_API_URL}/users/${mycart.data.id}/${f.id}`,
                qty
              )
              .then((r) => {
                console.log(r);
                dispatch(subQuantity(f));
                setList(!isUpdateList);
              });
          });
      } else {
        dispatch(subQuantity(f));
        setList(!isUpdateList);
      }
    }
  };
  /*const handlerCalculeAll = (f) => {
    dispatch(calculeAllCart());
    setList(!isUpdateList);
  };*/

  return (
    <>
      <div className="firstContainer container d-flex flex-column text-center my-5 p-5 border shadow">
        <h1 className="display-3 mb-4 mt-4">My cart</h1>
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
              <img
                style={{ maxWidth: "100px" }}
                src={f.image}
                alt={`Pictures of ${f.name}`}
              />
            </div>
            <div className="col-8 col-md-2">
              <h3>{f.name}</h3>
            </div>
            <div className="col-4 col-md-2">
              <button
                style={{ outline: "none" }}
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
                  style={{ outline: "none" }}
                  className="btnMin"
                  onClick={() => handlerSubQuantity(f)}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="cant">{f.cant}</span>
                <button
                  className="btnMax"
                  style={{ outline: "none" }}
                  onClick={() => handlerAddQuantity(f)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="priceCeld col-4 col-md-2">
              <p>$ {f.price * f.cant},00</p>
            </div>
          </div>
        ))}
        {cart.length !== 0 ? <ButtonPay /> : <></>}
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
