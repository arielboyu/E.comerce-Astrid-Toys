import React, { useEffect, useState } from "react";
import ProductCard from "../_productCard/productCard";
import axios from "axios";
//Este componente se mostrara en una solapa "Mis Compras" de un determinado usuario


const Order = ({ idOrder }) => {

 

  return (
    <div>
      <div className="d-flex flex-wrap ml-2 justify-content-center justify-content-md-start text-center">
        {product.map((p) => (p.active && <ProductCard product={p} />))}
      </div>
    </div>
  );
};

export default Order;
