import React, { useEffect, useState } from "react";
import axios from "axios";
import Purchase from "./purchase.js";
//Este componente se mostrara en una solapa "Mis Compras" de un determinado usuario

const ShoppingHistory = ({ idUser }) => {
  const [shopping, setShopping] = useState([]);
  //obtener todas las compras (shopping) de el idUser
  //mappear las "shopping" que no estan pendientes (las que no estan en el carrito)
  //mostrar esas shopping en una lista

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/shopping/${idUser}`)
      .then((orders) => {
        setShopping(orders.data);
      });
  },[]);

  return (
    <div className="container-fluid p-5">
      <ul>
        {shopping.map((order) => (
          <li style={{ listStyle: "none" }}>
            <Purchase orderId={order.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingHistory;
