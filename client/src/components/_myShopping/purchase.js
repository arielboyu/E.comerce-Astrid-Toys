import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./myShopping.module.css";

const Purchase = ({ orderId }) => {
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState({});

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
      <div className={`${style.containerShop} text-center mb-0 pb-0`}>
        
        {/* CABECERA DE LA ORDEN */}
        <div className="d-flex flex-row justify-content-between pb-2 px-5">
          <h2>{"ORDER N° " + order.id}</h2>
          <h3 className={order.state === 'CANCELLED' ? 'text-danger' : 'text-success'}>{order.state}</h3>
        </div>

        <div className="row mb-3">
          <div className={`${style.yellow1} col-sm-12 col-md-4 px-5 py-2 d-flex flex-column my-auto`}>
          <p className="my-auto">CLIENT</p>
          <p>{user.name}</p>
        </div>

        <div className={`${style.yellow2} col-sm-12 col-md-4 px-5 py-2 d-flex flex-column my-auto`}>
          <p className="my-auto">CLIENT NUMBER</p>
          <p>{order.userId}</p>
        </div>

        <div className={`${style.yellow3} col-sm-12 col-md-4 px-5 py-2 d-flex flex-column`}>
          <p className="my-auto">DATE</p>
          <p>{order.createdAt.tostring().subString(0,16)}</p>
        </div>

        </div>
      
        {/* MAP DE PRODUCTOS DE CADA ORDEN */}
        {product.map((prod) => (
        <>
          <div className={`${style.shop} d-flex flex-row justify-content-center align-items-center p-5 mb-3`}>
          
            <div className="d-md-flex flex-md-column col-md-2 m-3">
              <img src={prod.image} className={style.img}></img>
              <p className="pt-2">{prod.name}</p>
            </div>

            <div className="d-md-flex flex-column col-md-2 d-none">
              <p className={style.cabecera}>Product ID</p>
              <p> {prod.id} </p>
            </div>
            
            <div className="d-flex flex-column col-md-2 ">
              <p className={style.cabecera}>Qty</p>
              <p>{prod.orderdetails.quantity}</p>
            </div>

            <div className="d-flex flex-column col-md-2">
              <p className={style.cabecera}>U/Price </p>
              <p>{prod.orderdetails.price}</p>
            </div>
            
            <div className="d-flex flex-column col-md-2">
              <p className={style.cabecera}>Sub-Total</p>
              <p>{prod.orderdetails.price * prod.orderdetails.quantity }</p>
            </div>
            
            <div className="d-flex flex-md-column ">
              <Link to={`/products/id/${prod.id}`}>
                <button className={`${style.btnShop} btn btn-warning m-2 text-white`} >
                  View
                </button>
              </Link>
              <Link to="/myshop/loadReview">
                <button className={`${style.btnShop} btn btn-warning m-2 text-white`} >
                  Ratings
                </button>
              </Link>
            </div>
          
          </div>
        </>
        ))}
       
      </div>
    </>
  );
};

export default Purchase;
