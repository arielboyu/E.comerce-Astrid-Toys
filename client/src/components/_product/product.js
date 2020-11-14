import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddToCart from "../_addToCart/addToCart";
import { Link } from "react-router-dom";
//Product

export default function Product() {
  const [fuko, setFuko] = useState([]);
  const [load, setLoad] = useState(false);

  const { index } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3002/products/${index}`).then((res) => {
      setFuko(res.data);
      setLoad(true);
    });
  }, [load]);

  const card = {
    margin: "10px",
    textAlign: "center",
    padding: "10px",
    width: "700px",
    height: "400px",
  };
  const imagen = {
    margin: "20px auto",
    maxWidth: "100%",
    objectFit: "contain"
  };
  if (fuko) {
    return (
      <>
      <div
        style={card}
        className="border d-flex flex-direction-row justify-content-center align-items-center my-5 mx-auto rounded shadow"
      >
        {fuko.map((f) => (
          <>
            <div style={imagen}>
              <img
                style={imagen}
                className="border-right px-4"
                src={f.image}
              ></img>
            </div>
            <div className="mx-auto p-2 col-6">
              <h1>{f.name}</h1>
              <h4 className="text-danger mt-3">{f.description}</h4>
              <h1 className="p-1 font-weight-bold mt-4"> ${f.price}</h1>
              <p className="pt-3">Stock: {f.stock}</p>
              <p> ⭐⭐⭐⭐⭐ </p>
              {/* AddToCart productId= {f.id} />  */}
              {f.stock > 0 ? (
               <AddToCart product= {f} /> 
              ) : (
                <button className="btn btn-outline-secondary">
                  OUT OF STOCK
                </button>
              )}
            </div>
          </>
        ))}
      </div>
      <div className="d-flex col-12 mx-auto justify-content-center m-5">
        <Link to="/products">
        <button className="btn btn-outline-dark btn-lg ">
                  BACK
        </button>
        </Link>
      </div>
      </>
    );
  }
  return <p>404</p>;
}
