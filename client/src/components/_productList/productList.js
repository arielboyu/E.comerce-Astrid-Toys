import React, { useEffect, useState } from "react";
import ProductCard from "../_productCard/productCard";
import axios from "axios";



const ProductList = ({ product }) => {
 

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-start text-center">
        {product.map((p) => (p.active && <ProductCard product={p} />))}
      </div>
    </div>
  );
};

export default ProductList;
