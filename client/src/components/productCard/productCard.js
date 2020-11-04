import React from 'react';

export default function ProductCard({title,price}){
    return (
        <div>
            <div>
                <img></img>
             </div>
             <div>
             <h3>{title}</h3>
             <span>{price}</span>
             </div>
        </div>
      );
}
