import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddToCart from "../AddToCart/addToCart";
import { Link } from "react-router-dom";
import Review from "../../Review/review.js";
import style from "./product.module.css"
//Product

export default function Product() {
  const [funkos, setFunkos] = useState([]);
  const [load, setLoad] = useState(false);
  const [imagenMostrar, setImagenMostrar] = useState("")

    


  const { index } = useParams();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products/${index}`).then((res) => {
      setFunkos(res.data);
      setLoad(true);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/products/${index}`).then((product) => {
      if (product.data[0].image[0] === "h") {
        setImagenMostrar(product.data[0].image)
      } else {
        setImagenMostrar(`${process.env.REACT_APP_API_URL}/images/${product.data[0].id}.jpeg`)
        }
    });

  }, [load]);

  if (funkos) {
    return (
      <div className={`${style.containerProduct} firstContainer justify-content-center align-items-center my-5 mx-auto rounded border shadow`}>
        <div className={`${style.card} d-flex flex-column flex-lg-row mx-auto mb-3`} >
        {funkos.map((funko) => (
          <>
            {/* FUNKO IMAGE */}
            <div className={`${style.imageContainer} col-12 col-md-5 mx-auto d-flex align-items-center`}>
              <img className={`${style.image} px-4`} src={imagenMostrar}></img>
            </div>
            
            {/* FUNKO DESCRIPTION */}
            <div className={`${style.description} p-2 text-center text-lg-left mx-auto my-0 my-lg-auto`}>
              <h1>{funko.name}</h1>
              <h4 className={`${style.title} text-danger mt-2 mt-lg-0`}>{funko.description}</h4>
              <h1 className="p-1 font-weight-bold mt-3 display-4 mt-lg-4"> ${funko.price}</h1>
              <p className="pt-3">
                {funko.stock > 11 ? `Stock available :)` : <></>}
                {funko.stock < 10 && funko.stock > 1  ? `Only ${funko.stock} units left, hurry up!` : <></>}
                {funko.stock === 1  ? `Only ${funko.stock} unit left, last chance!` : <></>}
                {funko.stock === 0  ? `Not available :(` : <></> }
              </p>

              {/* DINAMIC BUTTON ADD TO CART - OUT OF STOCK */}
              {funko.stock > 0 ? (
              <div className="mb-5 mb-lg-0">
                <AddToCart product= {funko} />
              </div> ) : (
              <button className="btn btn-outline-secondary">
                OUT OF STOCK
              </button> )}

            </div>
          </>
          ))}
          
        
        </div> 
        <div className="d-flex flex-column flex-lg-row mx-auto p-0">
          <div className="col-12 mx-auto">
           <Review productId={index}/>
          </div>
        </div>
        
        <div className="d-flex col-12 mx-auto justify-content-center my-0 my-sm-3 my-lg-3 mt-0 mt-lg-5">
          <Link to="/products">
          <button className={`${style.btnBack} btn`}>
            BACK
          </button>
          </Link>
        </div>
        <div>
        
        </div>
      </div>
    );
  }
  return <p>404</p>;
}
