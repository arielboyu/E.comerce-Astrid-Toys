import React from 'react';
import Category from '../_category/category.js';

export default function CategoryList({category}){
    return (
        <div className="p-4">
            <h3>Categories</h3>
            {/* MAP COMENTADO */}
            <ul>
                {category.map((cat)=>(
                    <li>{cat.name}</li>
                ))}
            </ul>
        </div>
      );
}

//en un futuro al hacer clic en category deberia cambiar la route para que haga el get por category