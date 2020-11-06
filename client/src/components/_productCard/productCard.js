import React from 'react';
import {Link, useParams} from 'react-router-dom'


export default function ProductCard({product}){
    const carta = {
        width: "200px",
        height: "250px"
    };
    const imagen = {
        backgroundColor: "DodgerBlue",
        height: "100px"
    };
    const {index} = useParams();
    return (
        <Link to={`/products/${product.id}`}>
            <div style={carta} className="card m-2 p-1">
                <div style={imagen}></div>
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <span>${product.price}</span>
                </div>
                <button className="btn btn-danger mx-3 mb-1">ADD TO CART</button>
            </div>
        </Link>
      );
}
