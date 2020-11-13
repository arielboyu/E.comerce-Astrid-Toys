import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Menu({categories}) {
    const {cat} = useParams();
    
  return (
    <ul className="d-flex col-sm-12 col-md-10 col-lg-4 justify-content-center justify-content-lg-start ml-md-4">
      <Link to="/">
        <div className="dropdown">
          <button className="dropbtn bg-dark">Home</button>
        </div>
      </Link>

      <Link to="/products">
        <div className="dropdown">
          <button className="dropbtn bg-dark">Products</button>
        </div>
      </Link>
      <div className="dropdown">
        <button className="bg-dark dropbtn bg-dark">Categories</button>
        <div className="dropdown-content">
          {categories.map((cat) => (
            <Link to={`/products/category/nav/${cat.name.toLowerCase()}`}>{cat.name}</Link>
          ))}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn bg-dark">Dashboard</button>
        <div className="dropdown-content">
          <Link to="/dashboard/product/update">Products</Link>
          <Link to="/dashboard/category/list">Categories</Link>
        </div>
      </div>
    </ul>
  );
}
