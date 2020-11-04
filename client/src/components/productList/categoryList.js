import React from 'react';
import Category from '../Category/Category.js';

export default function CategoryList({categories}){
    return (
        <div>
            <ul>{categories.map(category=><li><Category name={category.name} description={category.description} /></li>)}</ul>
        </div>
      );
}



//en un futuro al hacer clic en category deberia cambiar la route para que haga el get por category