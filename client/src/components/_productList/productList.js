import React from 'react'
import ProductCard from '../_productCard/productCard';

const ProductList = ({product}) => {
    return (
        <div>
            <h2>Catalogue</h2>
            <div>
                {product.map((p)=>(
                    <ProductCard product={p}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList;