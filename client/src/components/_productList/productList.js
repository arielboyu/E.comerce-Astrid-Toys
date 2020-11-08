import React, { useEffect, useState } from 'react'
import ProductCard from '../_productCard/productCard';
import axios from 'axios'

const ProductList = ({product, match}) => { 
    let tituloCatalogo ='';
    switch(match.url){
    case '/category/series':
        tituloCatalogo = 'Funkos de Series'; break;
    case '/category/movies' :
        tituloCatalogo = 'Funkos de Peliculas'; break;
    case '/category/games' :
        tituloCatalogo = 'Funkos de Juegos'; break;
    default:
        tituloCatalogo = 'Catalogo de Funkos '; 
    }
    
    return (
        <div>
            <h2 className="py-3 pl-5">{tituloCatalogo}</h2>
            <div className="d-flex flex-wrap ml-2 text-center">
                {product.map((p)=>
                  p.active ?(<ProductCard product={p}/>):<></>
                )}
            </div>
        </div>
    )
}

export default ProductList;