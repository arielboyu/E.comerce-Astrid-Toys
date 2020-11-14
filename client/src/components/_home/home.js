import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";
import LogoImage from "./home.jpg"

const Home = ({ navShow }) => {
    
    const height = document.documentElement.clientHeight
    const fondo = {backgroundImage: `url(${LogoImage})`, height: height, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}
  return (
    <div style={fondo} className="d-flex flex-column justify-content-center align-items-center">
        <h1 className={`${style.title} display-1 text-center px-5 animate__animated animate__swing text-white`}>Astrid Toys</h1>
        <Link to="/products">
            <button className={`${style.btnIndex}  btn btn-light rounded btn-lg my-5 p-4`}>
            {" "}
            <h2>ENTER TO THE STORE</h2>
            </button>
      </Link>
    </div>
  );
};

export default Home;
