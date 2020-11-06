import React from 'react';
import {Link, useParams} from 'react-router-dom'

export default function ProductCard({product}){
    const imagen = {
        backgroundColor: "DodgerBlue",
        height: "100px"
    };
    const {index} = useParams();
    return (
        <Link to={`/products/${product.id}`}>
            <div className="card col-4">
                <div style={imagen}>
                    Imagen
                </div>
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <span>{product.price}</span>
                </div>
            </div>
        </Link>
      );
}
