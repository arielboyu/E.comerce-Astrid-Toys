import React, { useEffect, useState } from "react";
import ProductCard from "../_productCard/productCard";
import axios from "axios";
//Este componente se mostrara en una solapa "Mis Compras" de un determinado usuario


const ContainerMyShopping = ({ idUser }) => {
  const [shopping,setShopping] = useState([]);
  //obtener todas las compras (shopping) de el idUser
  //mappear las "shopping" que no estan pendientes (las que no estan en el carrito)
  //mostrar esas shopping en una lista
/*  function getAllShopping(){
    axios.get(`http://localhost:3002/users/shopping/${idUser}`)
    .then((orders)=>{
      setShopping(orders)
    })
  } 

useEffect(() => {
    if (logged_in) {
        getUserOrders();
    } else {
        window.location.href = "/login";
    }
}, []) */


 

  return (
    <div>
      <div className="d-flex flex-wrap ml-2 justify-content-center justify-content-md-start text-center">
        {product.map((p) => (p.active && <ProductCard product={p} />))}
      </div>
    </div>
  );
};

export default ContainerMyShopping;
