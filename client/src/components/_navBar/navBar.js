import React, { useEffect, useState, useLocation } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./navBar.css";
import { Navbar } from "reactstrap";
import Dashboard from "./btnDashboard";
import Login from "./btnLogin";
import Cart from "./btnCart";

const getCategory = axios.get("http://localhost:3002/categories");

export default function NavBar({ match, location }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory.then((r) => {
      setCategories(r.data);
    });
  }, []);

  return !match.isExact ? (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 id="title" className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start ml-0 pl-0 ml-lg-5 pl-lg-5 bg-light"> 
        <Link className="text-dark" to="/">Astrid Toys</Link>
        </h1>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item d-block d-lg-none ml-1">
              <Login></Login>
            </li>
            <li className="nav-item d-block d-lg-none ml-1">
              <Dashboard match={match} location={location} />
            </li>
            <li className="nav-item d-block d-lg-none">
              <Cart></Cart>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
              <i class="fas fa-tshirt"></i> Catalogue
              </Link>
            </li>
            <li className="nav-item active">
              <p className="nav-link d-none d-lg-block"> | </p>
            </li>
            
            <li className="nav-item active">
              <p className="nav-link mb-0 pb-2 d-block d-lg-none">Categories</p>
            </li>
            
            {categories.map((cat) => (
            <li className="nav-item">
              <Link className="nav-link ml-3 ml-lg-0" to={`/products/category/nav/${cat.name.toLowerCase()}`}>{cat.name}</Link>
            </li> ))} 

            <li className="nav-item active">
              <p className="nav-link d-none d-lg-block"> | </p>
            </li>
            
            <li className="nav-item d-none d-lg-block">
              <Dashboard match={match} location={location} />
            </li>
            <li className="nav-item d-none d-lg-block">
              <Login></Login>
            </li>
            <li className="nav-item d-none d-lg-block">
              <Cart></Cart>
            </li>
          </ul>
        </div>

      
      </nav>
    
    //     
    //     <Login />
    //     <Cart />
    //   </div>
    // </nav>
  ) : (
    <></>
  );
}
