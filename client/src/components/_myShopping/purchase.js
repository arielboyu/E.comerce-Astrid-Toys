import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Product from "../_product/product";

const Purchase = ({ orderId }) => {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([])
  const [redirect, setRedirect] = useState(false);
  /*  let history = useHistory(); */

  const handlerRedirect = () => {
    setRedirect(true);
  };



  //IMPORTAAAAAANTEEEEEEEE
  //HACER UNA RUTA QUE RETORNE TODOS LOS PRODUCTOS DE UNA ORDEN, Y LISTO trabajar con eso
  useEffect(() => {
    if (orderId) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/orders/${orderId}`)
        .then((order) => {
          setOrder(order.data);
          setProducts(order.data.products)
          console.log(order.data);
        });
    } else {
      console.log("cargando orden papu");
    }
  }, []);


  return (
    <>
      {redirect ? <Redirect to={`/myshop/details/1`} /> : <></>}
      <div className="container border shadow m-3 p-5">
        <div className="row border d-flex justify-content-between p-5">
          <div className="col-3 bg-warning p-5">fecha: {order.createdAt}</div>
          <div className="col-5 bg-primary p-2 m-2">
            {"Order ID: " + order.id}
          </div>
          <div className="col-3 bg-info d-flex justify-content-end p-1">
            <button className="btn btn-danger mb-5 px-5">Buy</button>
          </div>
        </div>

        <div className="row border p-5">
          <div className="col-5 bg-primary p-2 m-2"></div>
          <div className="col-3 bg-danger p-3 m-2">vendedor</div>
        </div>
        <div className="col-3 bg-warning p-5 m-2">
          <button
            className="btn btn-outline-info"
            onClick={() => handlerRedirect()}
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Purchase;
