import React from "react";
import { Link } from "react-router-dom";

const AddToCart = () => {
  return (
    <div>
      <Link to="/addToCart" className="text-decoration-none">
        <button id="boton-agregar" class="btn btn-danger m-2">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default AddToCart;
