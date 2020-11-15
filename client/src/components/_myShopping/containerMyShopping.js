import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Buys from "./buys.js";
//Este componente se mostrara en una solapa "Mis Compras" de un determinado usuario

const ContainerMyShopping = () => {
  const [shopping, setShopping] = useState([]);
  //obtener todas las compras (shopping) de el idUser
  //mappear las "shopping" que no estan pendientes (las que no estan en el carrito)
  //mostrar esas shopping en una lista
  const { idUser } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/shopping/${idUser}`)
      .then((orders) => {
        console.log(orders);
        setShopping(orders.data);
      });
  }, []);

  return (
    <div className="container-fluid p-5">
      <ul>
        {shopping.map((order) => (
          <li style={{listStyle:"none"}}>
            <Buys orderId={order.id} />
          </li>
        ))}
      </ul>
      {/* shopping.map((compras) => (p.active && <ProductCard product={p} />)) */}
    </div>
  );
};

export default ContainerMyShopping;
