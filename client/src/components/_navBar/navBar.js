import React from "react";
import SearchBar from "../_searchBar/searchBar";
import Login from "./login";
import Cart from "./cart";
import { Link } from "react-router-dom";
import './navBar.css';

export default function NavBar({category}) {
  const link = {
    listStyle: "none",
    textDecoration: "none",
    margin: "20px",
    paddingTop: "10px",
    color: "black",
  };

 
  
  return (
    <nav className="bg-warning d-flex flex-direction-column navbar navbar-dark">
      <h1 className="col-12 text-center px-5 pt-5 pb-3">
        Astrid Toys
      </h1>
      <ul className="d-flex col-sm-12 col-md-12 col-lg-5 justify-content-center justify-content-lg-start">
        <Link to="/">
          <div className="dropdown">
            <button className="dropbtn bg-dark">Home</button>
          </div>
        </Link>
        <div className="dropdown">
          <button className="bg-dark dropbtn bg-dark ">Categories</button>
            <div className="dropdown-content">
              {category.map((cat)=>
                (<Link to={`/categories/${cat.name.toLowerCase()}`}>{cat.name}</Link>)
              )}
          </div>
        </div>
        <Link to="/products">
        <div className="dropdown">
          <button className="dropbtn bg-dark">Products</button>
        </div>
        </Link>
        <div className="dropdown">
          <button className="dropbtn bg-dark">Dashboard</button>
            <div className="dropdown-content">
            <Link to="/dashboard/product/update">Products</Link>
            <Link to="/dashboard/category/list">Category</Link>
          </div>
        </div>
      </ul>
      <div className="d-flex col-12 col-lg-7 justify-content-center justify-content-lg-end">
        <Login />
        <Cart />
        <SearchBar />
      </div>
    </nav>
  );
}
