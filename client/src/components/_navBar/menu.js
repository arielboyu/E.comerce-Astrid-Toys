import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ categories }) {


  return (
    <ul className="d-flex col-sm-12 col-md-10 col-lg-6 justify-content-center justify-content-lg-start ml-md-4">
      <Link to="/products">
        <div className="dropdown">
          <button className="dropbtn bg-dark">Products</button>
        </div>
      </Link>
      <div className="dropdown">
        <button className="bg-dark dropbtn bg-dark">Categories</button>
        <div className="dropdown-content">
          {categories.map((cat) => (
            <Link to={`/products/category/nav/${cat.name.toLowerCase()}`}>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </ul>
  );
}
