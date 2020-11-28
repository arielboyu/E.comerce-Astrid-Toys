import React, { useEffect, useState } from "react";
import style from "../ProductCard/productCard.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/actions";

const AddToCart = ({ product }) => {
  const [productoParaAgregar, setProducto] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  //para arreglar lo de las ordenes
  //la logica seria:
  /*
si el usuario esta loggeado entonces:
    si existe orden pendiente agrego producto a la orden
    sino creo orden y agrego producto
    agrego producto al carrito redux
sino
    agrego producto al carrito redux
*/
  function handlerClick() {
  
    if (user.id !== null) {
      //busco orden pendiente del user
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${user.id}/cart`)
        .then((cart) => {
          if (cart.data) {
            console.log("ya existe una orden pendiente");
            console.log(cart);
            let prodAlCarro = {
              quantity: 1,
              productId: product.id,
              orderId: cart.data.id, //el id de la orden pending (osea el carrito)
            };
            axios
              .put(
                `${process.env.REACT_APP_API_URL}/users/${user.id}/cart`,
                prodAlCarro
              )
              .then((respuesta) => {
                console.log("producto agregado a la orden pendiente");
                console.log(respuesta);
              });
          } else {
            console.log("no existe orden pendiente");
            let prodAlCarro = {
              quantity: 1,
              productId: product.id,
            };
            axios
              .post(
                `${process.env.REACT_APP_API_URL}/users/${user.id}/cart`,
                prodAlCarro
              )
              .then((ord) => {
                console.log("nueva orden creada");
                console.log(ord);
              });
          }
        });
      //por ultimo agrego el producto al carrito redux a pesar de que el user esta loggeado
      dispatch(addToCart(productoParaAgregar));
    } else {
      //si el user no esta loggeado solo agrego el producto al carrito redux
      dispatch(addToCart(productoParaAgregar));
    }
  }

  useEffect(() => {
    setProducto({ ...product, cant: 1 });
  }, []);

  return (
    <button
      id="boton-agregar"
      className={`btn btn-danger mb-1 ${style.cart}`}
      type="button"
      onClick={handlerClick}
    >
      <i class="fas fa-cart-plus"></i> ADD TO CART
    </button>
  );
};

export default AddToCart;
