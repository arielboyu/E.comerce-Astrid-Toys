import React from 'react';
import Category from '../category/category.js';

export default function CategoryList({categories}){
    return (
        <div>
            {/* MAP COMENTADO */}
            {/* <ul>{categories.map(category=><li><Category name={category.name} description={category.description} /></li>)}</ul> */}
        </div>
      );
}

//en un futuro al hacer clic en category deberia cambiar la route para que haga el get por category