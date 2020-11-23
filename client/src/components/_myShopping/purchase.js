import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./myShopping.module.css";
import LoadReview from "../../components/_review/loadReview"

const Purchase = ({ orderId }) => {
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (orderId) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/orders/${orderId}`)
        .then((res) => { totalShopCalculated(res.data.products);
          setOrder(res.data);
          setProduct(res.data.products);
          setUser(res.data.user);
          
        });
    } else {
      console.log("cargando orden papu");
    }
  }, []);

  function totalShopCalculated(product){
    var cont = 0;
    product.forEach(element => {
      cont = cont + (element.price * element.orderdetails.quantity);
      setTotal(cont)
    });
  }

  return (
    <>
      <div className={`${style.containerShop} text-center mb-0 pb-0`}>
        
        {/* CABECERA DE LA ORDEN */}
        <div className="d-flex flex-column flex-md-row justify-content-between pb-2 px-5">
          <h2>{"ORDER N° " + order.id}</h2>
          <h3 className={order.state === 'CANCELLED' ? 'text-danger' : 'text-success'}>{order.state}</h3>
        </div>

        <div className="row mb-3">
          <div className={`${style.yellow1} rounded-sm col-sm-12 col-md-4 px-5 py-2 d-flex flex-column my-auto`}>
          <p className="my-auto">CLIENT</p>
          <p>{user.name}</p>
        </div>

        <div className={`${style.yellow2} rounded-sm col-sm-12 col-md-4 px-5 py-2 d-flex flex-column my-auto`}>
          <p className="my-auto">TOTAL</p>
          <p>$ {total}</p>
        </div>

        <div className={`${style.yellow3} rounded-sm col-sm-12 col-md-4 px-5 py-2 d-flex flex-column`}>
          <p className="my-auto">DATE</p>
          <p>{(order.createdAt)}</p>
        </div>

        </div>
      
        {/* MAP DE PRODUCTOS DE CADA ORDEN */}
        {product.map((prod) => (
     
        <div className={`${style.shop} mb-4`}>
          <div className={` d-flex flex-column flex-md-row  justify-content-center align-items-center pt-5 pb-2`}>
          
            <div className="row d-md-flex flex-md-column col-md-2 mb-0 mb-md-3 m-md-3">
              <img src={prod.image} className={style.img}></img>
              <p className="pt-2 mx-auto">{prod.name}</p>
            </div>

            <div className="row d-md-flex flex-column col-md-2 d-none">
              <p className={style.cabecera}>Product ID</p>
              <p> {prod.id} </p>
            </div>
            
            <div className="row d-flex flex-column col-md-2 ">
              <p className={style.cabecera}>Qty</p>
              <p>{prod.orderdetails.quantity}</p>
            </div>
            <div className="row d-flex flex-column col-md-2">
              <p className={style.cabecera}>U/Price </p>
              <p>$ {prod.orderdetails.price}</p>
            </div>
            
            <div className="row d-flex flex-column col-md-2">
              <p className={style.cabecera}>Sub-Total</p>
              <p>$ {prod.orderdetails.price * prod.orderdetails.quantity }</p>
            </div>
            
            <div className="d-flex flex-md-column ">
              <Link to={`/products/id/${prod.id}`}>
                <button className={`${style.btnShop} btn btn-warning m-2 text-white`} >
                  View
                </button>
              </Link>
            </div>
          </div>
            <LoadReview idProduct = {prod.id}/>
        </div>
        ))}
       
      </div>
    </>
  );
};

export default Purchase;
