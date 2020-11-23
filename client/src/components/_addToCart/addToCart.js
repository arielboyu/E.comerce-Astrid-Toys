import React, { useEffect, useState } from "react";
import style from "../_productCard/productCard.module.css";

import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/actions/actions'


const AddToCart = ({ product }) => {
  const [productoParaAgregar, setProducto] = useState()
  const dispatch = useDispatch()

  useEffect(()=>{
    setProducto({...product, cant:1})
  },[])
 
  return (
        <button 
          id="boton-agregar"
          className={`btn btn-danger mb-1 ${style.cart}`}
          type="button"
          onClick={()=>dispatch(addToCart(productoParaAgregar))}
        >
          <i class="fas fa-cart-plus"></i> ADD TO CART
        </button>)
      
};


export default AddToCart;
