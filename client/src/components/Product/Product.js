import React from 'react';


export default function Product({product}){
    return (
        <div>
          <div>
           <h1>{product.price}</h1>
           </div >
           <div>
           <p>{product.description}</p>
           </div>
           <div>
           <span>{ "$" + product.Precio  }</span>
           </div>
            <div>{poduct.img}</div>  
           <div>{poduct.img.review1}</div> 
           <div>{poduct.img.review2}</div> 
           <div>{poduct.img.review3}</div> 
           </div>
      );
}
