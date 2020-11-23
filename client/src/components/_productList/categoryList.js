import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../_searchBar/searchBar.js";
import style from "../_catalogue/catalogue.module.css"

export default function CategoryList({ category, filter, onSearch, onClear }) {
  return (
      <>
      {/* DESKTOP VERSION */}
      <div className={`${style.categoryList} d-none d-lg-flex flex-row rounded justify-content-center justify-content-lg-start`}>
        
        <div className="my-auto d-flex">
          <p className="d-none d-lg-block my-auto ml-lg-3 mr-lg-4 ">Categories </p>
          {category.map((cat) => (
            <Link to={`/products/category/${cat.name.toLowerCase()}`} onClick={() => filter(cat.name)} >
              <span className="mx-2 text-uppercase">{cat.name}</span>
            </Link>
          ))}
        </div>

        <div className="d-none d-lg-block justify-content-center my-auto">
          <SearchBar onSearch={onSearch} onClear={onClear} />
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className={`${style.categoryList} d-block d-lg-none flex-row rounded justify-content-center justify-content-lg-start`}>
        <div className="my-auto d-block d-lg-none ">
          {category.map((cat) => (
            <Link to={`/products/category/${cat.name.toLowerCase()}`} onClick={() => filter(cat.name)} >
              <span className="mx-2 text-uppercase">{cat.name}</span>
            </Link>
          ))}
        <div className="d-block d-lg-none mb-5 mt-3">
        <SearchBar onSearch={onSearch} onClear={onClear} />
        </div>
        </div>
        </div>
      
      </>
  );
}