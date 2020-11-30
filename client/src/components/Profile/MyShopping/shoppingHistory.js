import React, { useEffect, useState } from "react";
import axios from "axios";
import Purchase from "./purchase.js";
import { Link } from 'react-router-dom';
import style from './myShopping.module.css'

const ShoppingHistory = ({ idUser }) => {
  const [shopping, setShopping] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/shopping/${idUser}`)
      .then((orders) => {
        setShopping(orders.data);
      });
  },[]);

  return (
    <>
 
    <div className={`firstContainer container text-center mb-0 pb-0 d-flex flex-column justify-content-center align-items-center`}>
      <h1 className="pb-5 mb-0">My Shopping history</h1>
      
      {!shopping.length ? 
      <>
      <h5 className="pb-5">You have no purchases made yet</h5> 
        <a href="/products">
          <span className={`${style.button} btn`} >
              GO SHOP
          </span>
        </a>
      </>
      
      :
      
      <ul>
        { shopping.map((order) => (
          <li style={ { listStyle: "none" } }>
            <Purchase orderId={order.id} />
          </li>
        ) ) }
      </ul>}

    </div>
    </>
  );
};

export default ShoppingHistory;
