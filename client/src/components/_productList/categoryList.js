import React from "react";
// import Category from "../_category/category.js";
import { Link } from "react-router-dom";
import SearchBar from "../_searchBar/searchBar.js";
import style from "../_productCard/productCard.module.css"

export default function CategoryList({ category, filter, onSearch, onClear }) {
  return (
    <div style={{width: "350px"}}className="p-4 pl-5">
      <h3 className="mb-3 text-dark">Search Products</h3>
      <SearchBar onSearch={onSearch} onClear={onClear} />
      <h3 className="mt-5 mb-3 text-dark">Categories</h3>
      <ul className="list-unstyled ">
        {category.map((cat) => (
          <Link
            to={`/products/category/${cat.name.toLowerCase()}`}
            onClick={() => filter(cat.name)}
            className={`text-uppercase`}
          >
            <li>
              <h5 className="ml-4">{cat.name}</h5>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

//en un futuro al hacer clic en category deberia cambiar la route para que haga el get por category
