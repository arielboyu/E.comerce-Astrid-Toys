import React from 'react'
import ProductCard from '../_productCard/productCard';

const ProductList = ({product}) => {
    return (
        <div>
            <h2 className="pt-3 pl-2">Catalogue</h2>
            <div className="d-flex flex-wrap justify text-center">
                {product.map((p)=>(
                    <ProductCard product={p}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList;