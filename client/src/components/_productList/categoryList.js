import React from "react";
// import Category from "../_category/category.js";
import { Link } from "react-router-dom";
import SearchBar from "../_searchBar/searchBar.js";

export default function CategoryList({ category, filter, onSearch, onClear }) {
  return (
    <div className="p-4">
      <h3 className="mb-3">Search Products</h3>
      <SearchBar onSearch={onSearch} onClear={onClear} />
      <h2 className="mt-5 mb-3">Categories</h2>
      {/* MAP COMENTADO */}
      <ul className="list-unstyled ">
        {category.map((cat) => (
          <Link
            to={`/products/category/${cat.name.toLowerCase()}`}
            onClick={() => filter(cat.name)}
            className="text-decoration-none"
          >
            <li>
              <h4 className="ml-4 text-info">{cat.name}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

//en un futuro al hacer clic en category deberia cambiar la route para que haga el get por category
