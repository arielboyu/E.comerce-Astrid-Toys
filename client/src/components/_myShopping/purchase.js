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
        <div className="row mb-3">
          <div className={`${style.yellow1} col-sm-12 col-md-4 px-5 py-2 d-flex flex-column`}>
            <p>{"Order Number: " + order.id}</p>
            <p>{"State: " + order.state}</p>
          </div>
          <div className={`${style.yellow2} col-sm-12 col-md-4 px-5 py-2 d-flex flex-column`}>
            <p>{"Client: " + user.name}</p>
            <p>{console.log(order)}</p>
            <p>{"Client Number: " + order.userId}</p>
          </div>
          <div className={`${style.yellow3} col-sm-12 col-md-4 px-5 py-2 d-flex flex-column`}>
            Date: {order.createdAt}
          </div>
        </div>

      
          {product.map((prod) => (
            <>
              <div className={`${style.shop} d-flex flex-row justify-content-center align-items-center p-5 mb-3`}>
                {/* CABECERA */}

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
<<<<<<< HEAD
              <div className="row">
                <button
                  className="btn btn-outline-info col-2"
                  onClick={() => handlerRedirect()}
                >
                  View Product
                </button>
                <button
                  className="btn btn-outline-info col-2"
                  onClick={() => handlerRedirectLoadReview()}
                >
                  Leave a review!
                </button>
              </div>
=======
              
>>>>>>> c02778f40593c6e870ca2369e88635911872fb87
              
              </>
          ))}
       
      </div>
    </>
  );
};

export default Purchase;
