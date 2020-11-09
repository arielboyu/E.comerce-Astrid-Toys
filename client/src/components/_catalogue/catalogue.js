import React, { useEffect, useState } from "react";
import ProductList from "../_productList/productList";
import CategoryList from "../_productList/categoryList";

const Catalogue = ({ product, category, match }) => {
  let tituloCatalogo = "";
  switch (match.url) {
    case "/categories/series":
      tituloCatalogo = "Funkos de Series";
      break;
    case "/categories/movies":
      tituloCatalogo = "Funkos de Peliculas";
      break;
    case "/categories/games":
      tituloCatalogo = "Funkos de Juegos";
      break;
    default:
      tituloCatalogo = "Catalogo de Funkos ";
  }

  return (
    <>
      <div className="mx-auto text-center w-75 mt-5">
        <h1 className="display-3 d-none d-sm-block">{tituloCatalogo}</h1>
        <h2 className="d-block d-sm-none">{tituloCatalogo.toUpperCase()}</h2>
      </div>
      <div className="container-fluid p-5 ">
        <div className="row">
          <div className="bg-primary d-none d-sm-flex col-xs-11 col-s-5 col-md-5 col-lg-4 col-xl-3  flex-column pt-3 mx-3 m-1 mb-4 rounded ">
            <CategoryList category={category} />
          </div>
          <div className="d-flex col-xs-11 col-s-6 col-md-5 col-lg-6 col-xl-8 pb-3 mx-3 mb-1 rounded ">
            <ProductList product={product} match={match} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
