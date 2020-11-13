import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";

const Home = ({ navShow }) => {
    const height = document.documentElement.clientHeight
  return (
    <div style={{ height: height, backgroundColor: "rgba(206, 154, 24, 0.863)"}} className="d-flex flex-column justify-content-center align-items-center">
      <h1 id="title" className={`text-center px-5 pt-5 pb-3 animate__animated animate__flip`}>Astrid Toys</h1>
      <Link to="/products">
        <button className={`${style.btnIndex} btn btn-outline-dark rounded btn-lg my-5`}>
          {" "}
          INGRESAR A LA TIENDA
        </button>
      </Link>
    </div>
  );
};

export default Home;
