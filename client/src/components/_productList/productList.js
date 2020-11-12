import React from "react";
import ProductCard from "../_productCard/productCard";




const ProductList = ({ product }) => {
 

  return (
    <div>
      <div className="d-flex flex-wrap ml-md-2 justify-content-center justify-content-md-start text-center">
        {product.map((p) => (p.active && <ProductCard product={p} />))}
      </div>
    </div>
  );
};

export default ProductList;
