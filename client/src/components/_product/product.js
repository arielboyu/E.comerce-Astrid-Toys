import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Product

export default function Product() {
  const [fuko, setFuko] = useState([]);
  const [load, setLoad] = useState(false);

  const { index } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3002/products/${index}`).then((res) => {
      setFuko(res.data);
      setLoad(true);
      console.log(fuko);
    });
  }, [load]);

  const card = {
    margin: "10px",
    textAlign: "center",
    padding: "10px",
    width: "500px",
    height: "350px",
  };
  const imagen = {
    backgroundColor: "DodgerBlue",
    width: "200px",
    height: "80%",
    margin: "20px",
  };
  if (fuko) {
    return (
      <div style={card} className="bg-primary d-flex flex-direction-row justify-content-center align-items-center">
        {fuko.map((f) => (
          <>
            <div style={imagen}>Imagen</div>
            <div className="m-5">
              <h1>{f.name}</h1>
              <h4 className="text-white">{f.description}</h4>
              <h5 className="p-1 font-weight-bold"> ${f.price}</h5>
              <p className="pt-3">Stock:{f.stock}</p>
              <p> ⭐⭐⭐⭐⭐ </p>
              <button className="btn btn-danger">Add to Cart</button>
            </div>
          </>
        ))}
      </div>
    );
  }
  return <p>404</p>;
}
