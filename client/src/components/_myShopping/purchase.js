import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Product from "../_product/product";

const Purchase = ({ orderId }) => {
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handlerRedirect = () => {
    setRedirect(true);
  };
  useEffect(() => {
    if (orderId) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/orders/${orderId}`)
        .then((res) => {
          //console.log(res.data.products)
          setOrder(res.data);
          setProduct(res.data.products);
          setUser(res.data.user);
        });
    } else {
      console.log("cargando orden papu");
    }
  }, []);

  return (
    <>
      {redirect ? <Redirect to={`/myshop/details/1`} /> : <></>}
      <div className="container border shadow ">
        <div className="row border ">
          <div className="col-sm-12 col-md-4 bg-warning ">
            <p>{"Order Number: " + order.id}</p>
            <p>{"State: " + order.state}</p>
          </div>
          <div className="col-sm-12  col-md-4 bg-info d-flex justify-content-end ">
            <p>{"Client: " + user.name}</p>
            <p>{console.log(order)}</p>
            <p>{"Client Number: " + order.userId}</p>
          </div>
          <div className="col-sm-12 col-md-4 bg-primary  ">
            Date: {order.createdAt}
          </div>
        </div>

      
          {product.map((prod) => (
            <>
              <div className="row border ">
                {/* CABECERA */}
                <div className="col-sm-12 col-md-2 bg-white ">
                  <p className="border">Product</p>
                  <p>{prod.name}</p>
                </div>
                <div className="col-sm-12 col-md-2  bg-white ">image</div>
                <div className="col-sm-4 col-md-2 bg-white">
                  <p className="mb-0">Qty</p>
                  <p>{prod.orderdetails.quantity}</p>
                </div>
                <div className="col-sm-4 col-md-2 bg-white ">
                  <p className="mb-0">U/Price</p>
                  <p>{prod.orderdetails.price}</p>
                </div>
                <div className="col-sm-4 col-md-2 bg-white ">
                  <p className="">Sub-Total</p>
                  <p>{prod.orderdetails.quantity * prod.orderdetails.price}</p>
                </div>
              </div>
              <div className="row">
                <button
                  className="btn btn-outline-info col-2"
                  onClick={() => handlerRedirect()}
                >
                  View Product
                </button>
              </div>
              </>
          ))}
       
      </div>
    </>
  );
};

export default Purchase;
