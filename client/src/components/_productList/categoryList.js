import React from 'react';
import Category from '../_category/category.js';
import { Link } from 'react-router-dom';

export default function CategoryList({category}){
    return (
        <div className="p-4">
            <h2 className="mb-3">Categories</h2>
            {/* MAP COMENTADO */}
            <ul className="list-unstyled ">
                {category.map((cat)=>(
                    <Link to={`/categories/${cat.name.toLowerCase()}`} className="text-decoration-none"><li><h4 className="ml-4 text-white">{cat.name}</h4></li></Link>
                ))}
            </ul>
            <h3 className="mt-5">Sub-Categories</h3>
        </div>
      );
}

//en un futuro al hacer clic en category deberia cambiar la route para que haga el get por category