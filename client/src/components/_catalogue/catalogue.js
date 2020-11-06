import React from 'react'
import ProductList from '../_productList/productList';
import CategoryList from '../_productList/categoryList';

const Catalogue = ({product, category}) => {
    return (
        <div className='container-fluid p-5'>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 d-flex flex-column pt-5 bg-primary">
                    <CategoryList category={category}/>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 bg-info ">
                    <ProductList product={product}/>
                </div>
            </div>
        </div>
    )
}

export default Catalogue;

