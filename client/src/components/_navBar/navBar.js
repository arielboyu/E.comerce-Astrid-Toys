import React, { useEffect, useState, useLocation } from "react";
import axios from "axios";
import Menu from "./menu";
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
    <nav className="bg-warning d-flex flex-direction-column navbar navbar-dark">
      <h1 id="title" className={`d-none d-md-block col-12 text-center px-5 pt-3 text-decoration-none`}>
        Astrid Toys
      </h1>
      <h2 id="title" className="col-12 text-center d-block d-md-none pt-3">Astrid Toys</h2>
      <div className="d-flex mx-auto mx-md-0 pl-0 pl-md-3 ">
        <Menu categories={categories} />
      </div>
      <div className="d-flex mx-auto mr-md-5 pr-5 mb-3 mx-auto">
        <Dashboard match={match} location={location} />
        <Login />
        <Cart />
      </div>
    </nav>
  ) : (
    <></>
  );
}
