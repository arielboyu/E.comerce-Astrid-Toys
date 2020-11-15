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
    <nav className="navbar navbar-expand-lg navbar-light bg-warning pt-2 pb-0">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 id="title" className="col-8 col-lg-6 d-flex justify-content-start justify-content-lg-start ml-0 pl-0 ml-lg-5 pl-lg-5 pb-4 pt-4 pb-lg-0 pt-lg-0"> 
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
            <li className="nav-item d-block d-lg-none border-top pt-3 mt-3 border-dark">
              <Link to="/products" className="nav-link">
              <i class="fas fa-tshirt"></i> Catalogue
              </Link>
            </li>

            <li className="nav-item d-none d-lg-block">
              <Link to="/products" className="nav-link">
                Catalogue
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link d-none d-lg-block"> | </p>
            </li>
            
            <li className="nav-item">
              <p className="nav-link mb-0 d-block d-lg-none">
              <i class="fas fa-list ml-1"></i> Categories</p>
            </li>
            
            {categories.map((cat) => (
            <li className="nav-item">
              <Link className="nav-link ml-4 ml-lg-0" to={`/products/category/nav/${cat.name.toLowerCase()}`}>
                <i class="fas fa-angle-right d-inline d-lg-none"></i> {cat.name}
              </Link>
            </li> ))} 

            <li className="nav-item text-decoration-none">
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
