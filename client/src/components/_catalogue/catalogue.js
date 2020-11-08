import React, { useEffect, useState } from "react";
import ProductList from "../_productList/productList";
import CategoryList from "../_productList/categoryList";


const Catalogue = ({ product, category }) => {
  return (
    <>
      <div className="bg-dark container-fluid p-5 ">
        <div className="row">
          <div className="bg-primary d-flex col-xs-11 col-s-5 col-md-5 col-lg-4 col-xl-3 d-flex flex-column pt-3 mx-3 my-1 rounded-right rounded-left">
            <CategoryList category={category} />
          </div>
          <div className="bg-info d-flex col-xs-11 col-s-6 col-md-5 col-lg-6 col-xl-8  py-3 mx-3 my-1 rounded-right rounded-left">
            <ProductList product={product} />
          </div>
        </div>
      </div>
      <div className="bg-danger col-12 text-center p-5 text-white">
       © 2020 ASTRID TOYS - Todos los derechos reservados
      </div>
    </>
  );
};

export default Catalogue;
