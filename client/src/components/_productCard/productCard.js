import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'


export default function ProductCard({product}){


    const carta = {
        width: "200px",
        height: "300px"
    };
    const imagen = {
        backgroundColor: "DodgerBlue",
        height: "200px"
    };
    const {index} = useParams();
    return (
        <Link className="text-decoration-none" to={`/products/${product.id}`}>
            <div style={carta} className="card m-2 p-1">
                <div style={imagen}></div>
                <div className="card-body">
                    <h3 className="m-0">{product.name}</h3>
                    <p className="mb-3">${product.price}</p>
                </div>
                <button className="btn btn-danger mx-3 mb-1 ">ADD TO CART</button>
            </div>
        </Link>
      );
}
