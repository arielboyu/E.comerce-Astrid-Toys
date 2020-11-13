import React from "react";
import { Link, useParams } from "react-router-dom";
import style from './productCard.module.css'

export default function ProductCard({ product }) {
  const imagen = {
    backgroundColor: "white",
  };
  const { index } = useParams();
  return (
    <Link className="text-decoration-none" to={`/products/id/${product.id}`}>
      <div className={`${style.card} card mr-3 mt-1 mb-3 pt-5 pb-3 px-4`}>
          <img style={imagen} src="https://www.cellshop.com/342978-large_default/boneca-harley-quinn-dc-super-heroes-funko-pop-301.jpg"></img>
        <div className="card-body text-center">
          <h5 className={`${style.text} m-0 mb-1 text-dark text-uppercase `}>{product.name}</h5>
          <h1 className={`pt-2 ${style.price}`}>${product.price}</h1>
        </div>
        <button className={`btn btn-danger mx-3 mb-1 ${style.cart}`}><i class="fas fa-cart-plus"></i> ADD TO CART</button>
      </div>
    </Link>
  );
}
