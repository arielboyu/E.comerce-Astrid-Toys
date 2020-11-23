import React from "react";
import ProductCard from "../_productCard/productCard";

const ProductList = ({ product }) => {
  return (
      <div className="d-flex flex-wrap justify-content-center ">
        {product.map((p) => (p.active && <ProductCard product={p} />))}
      </div>
  );
};

export default ProductList;
