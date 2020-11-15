import React from "react";
import { Link } from "react-router-dom";
import style from "./productCard.module.css";
import AddToCart from "../_addToCart/addToCart";

export default function ProductCard({ product }) {
  const imagen = {
    backgroundColor: "white",
    maxWidth: "100%",
    objectFit: "contain",
  };
  return (
    <div className={`${style.card} card mr-0 mr-md-4 mt-1 mb-3 pt-5 pb-3 px-4`}>
      <Link className="text-decoration-none" to={`/products/id/${product.id}`}>
        <img style={imagen} src={product.image}></img>
        <div className="card-body text-center">
          <h5 className={`${style.text} m-0 mb-1 text-dark text-uppercase `}>
            {product.name}
          </h5>
          <h1 className={`pt-2 ${style.price}`}>${product.price}</h1>
        </div>
      </Link>

      {product.stock > 0 ? (
        <AddToCart product={product}/>
      ) : (
        <button className={`btn mx-3 mb-1 ${style.btnTtc}`}>
          OUT OF STOCK
        </button>
      )}
    </div>
  );
}
