import React, { useEffect, useState, useLocation } from "react";

import axios from "axios";
import Menu from "./menu";
import { Link } from "react-router-dom";
import style from "./navBar.css"
import { Navbar } from "reactstrap";
import BtnDashboard from "./btnDashboard";

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
      
        <h1 id="title" className={`col-12 text-center px-5 pt-5 pb-3 text-decoration-none`}>
        Astrid Toys
        </h1>
      
      <Menu categories={categories} />
      <div className="">
        
      </div>
      <BtnDashboard match={match} location={location} />
    </nav>
  ) : (
    <></>
  );
}
