import React, { useEffect, useState, useLocation} from "react";

import Login from "./login";
import Cart from "./cart";

import style from "./navBar.css";
import axios from 'axios'
import Menu from "./menu";

const getCategory = axios.get("http://localhost:3002/categories");

export default function NavBar({match}) {
  const [categories, setCategories] = useState([]);

  const link = {
    listStyle: "none",
    textDecoration: "none",
    margin: "20px",
    paddingTop: "10px",
    color: "black",
  };

  useEffect(()=>{
    getCategory.then((r)=>{
      setCategories(r.data)
    })
  },[])

  return (
    !match.isExact ?
    <nav className="bg-warning d-flex flex-direction-column navbar navbar-dark">
      
      <h1 id="title" className={`col-12 text-center px-5 pt-5 pb-3`}>Astrid Toys</h1>
      <Menu categories={categories}/>
      <div className="d-flex col-12 col-lg-7 justify-content-center justify-content-lg-end">
        <Login />
        <Cart />
      
      </div>
    </nav> :
    <></>
  );
}
