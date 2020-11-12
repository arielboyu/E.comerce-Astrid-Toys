import React, { useEffect, useState } from "react";
import ProductCard from "../_productCard/productCard";
import axios from "axios";
//Este componente se mostrara en una solapa "Mis Compras" de un determinado usuario

const Buys = ({ orderId }) => {
  const [order, setOrder] = useState({});

  function inicialState() {
    axios.get(`http://localhost:3002/orders/${orderId}`).then((order) => {
        console.log(order.data)
      setOrder(order.data);
    });
  }
  useEffect(() => {
    inicialState();
  }, []);

  return (
    <div className="container border shadow m-3 p-5">
      <div className="row border d-flex justify-content-between p-5">
  <div className="col-3 bg-warning p-5">fecha: {order.createdAt}</div>
        <div className="col-3 bg-info d-flex justify-content-end p-1">
          <button className="btn btn-danger mb-5 px-5">Buy</button>
        </div>
      </div>
      <div className="row border p-5">
  <div className="col-5 bg-primary p-2 m-2">{ "Product ID: " + order.id}</div>
        <div className="col-3 bg-danger p-3 m-2">vendedor</div>
        <div className="col-3 bg-warning p-5 m-2"><button className="btn btn-outline-info" >Details</button></div>
      </div>
    </div>
  );
};

export default Buys;
