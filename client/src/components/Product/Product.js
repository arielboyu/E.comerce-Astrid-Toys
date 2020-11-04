import React from 'react';


export default function Product({title,description,price,stock}){
    return (
        <div>
            <div>
                <img></img>
             </div>
             <div>
             <h3>{title}</h3>
             <p>{description}</p>
             <span>{ "$" + price}</span> 
             <h4>{stock}</h4>  
             <span> 5 reviews </span>
             <button> Add to Cart  </button>
             </div>
        </div>
      );
}
