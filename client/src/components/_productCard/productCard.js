import React from "react";
import { Link} from "react-router-dom";

export default function ProductCard({ product }) {
  const carta = {
    width: "200px",
    height: "300px",
  };
  const imagen = {
    backgroundColor: "white",
    height: "150px",
  };
  // const { index } = useParams();
  return (
    <Link className="text-decoration-none" to={`/products/id/${product.id}`}>
      <div style={carta} className="card mx-1 my-1 p-2 shadow">
        <div style={imagen}>
          <img
            style={imagen}
            src="https://www.cellshop.com/342978-large_default/boneca-harley-quinn-dc-super-heroes-funko-pop-301.jpg"
          ></img>
        </div>
        <div className="card-body">
          <h3 className="m-0 text-dark">{product.name}</h3>
          <p className="mb-3 text-info">${product.price}</p>
        </div>
        {product.stock > 0 ? (
          <button className="btn btn-danger mx-3 mb-1 ">
            ADD TO CART
          </button>
        ) : (
          <button className="btn btn-outline-secondary mx-3 mb-1 ">
            OUT OF STOCK
          </button>
        )}
      </div>
    </Link>
  );
}
