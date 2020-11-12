import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const AddToCart = ({ productId }) => {
  const handlerClick = () => {
    axios.get(`http://localhost:3002/products/1`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <button
        id="boton-agregar"
        className="btn btn-danger m-2"
        type="button"
        onClick={() => handlerClick()}
      >
        Add to cart
      </button>
      <button className="btn btn-danger m-2">back</button>
    </div>
  );
};

export default AddToCart;
