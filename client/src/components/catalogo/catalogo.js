import React from 'react'
import ProductList from '../productList/productList';
import CategoryList from '../productList/categoryList';

function Catalogo (){
    return
    (
        <div className='container'>
            <div>
                <CategoryList/>
            </div>
            <div>
                <ProductList/>
            </div>
        </div>
    )
}

export default Catalogo;