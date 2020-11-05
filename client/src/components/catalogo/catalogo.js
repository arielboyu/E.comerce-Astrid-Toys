import React from 'react'
import ProductList from '../productList/productList';
import CategoryList from '../productList/categoryList';

const Catalogo = () => {
    return (
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