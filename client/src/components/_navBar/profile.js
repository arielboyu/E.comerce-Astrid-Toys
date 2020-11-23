import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddToCart from "../_addToCart/addToCart";
import { Link } from "react-router-dom";
import Review from "../_review/review.js";
import style from "./profile.module.css"
//Product

export default function Profile() {
  const user = useSelector(state => state.user);  
  const [load, setLoad] = useState(false);

    return (
      <div className={`container justify-content-center align-items-center my-5 mx-auto rounded border shadow`}>
        <div className={`${style.card} d-flex flex-column flex-lg-row mx-auto mb-3`} >
          <h1 className="mx-auto mt-5">Welcome {user.name} !</h1>
        </div> 
        <div className="d-flex flex-column flex-lg-row mx-auto p-0">
          <img src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilustr.jpg?ver=6"></img>
      
        </div>
        <div className="text-center">
          <span>
           
          </span>
        </div>
        
        <div className="d-flex col-12 mx-auto justify-content-center m-5">
          <Link to="/products">
          <button className={`${style.btnBack} btn `}>
            BACK
          </button>
          </Link>
        </div>
        <div>
        
        </div>
      </div>
    );
}
