import React from 'react'
import ProductList from '../productList/productList';
import CategoryList from '../productList/categoryList';

const Catalogue = ({product, category}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-2">
                    <CategoryList category={category}/>
                </div>
                <div className="col-10">
                    <ProductList product={product}/>
                </div>
            </div>
        </div>
    )
}

export default Catalogue;