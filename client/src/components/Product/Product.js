import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'




export default function Product(){
    const [fuko, setFuko]= useState([]);
    const [load, setLoad]= useState(false);

    const {index} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3002/products/${index}`)
        .then((res)=>{
            setFuko(res.data)
            setLoad(true)
            console.log(fuko)
        })
      },[load])

    const imagen = {
        backgroundColor: "DodgerBlue",
        height: "100px"
    };
    if(fuko){
        return (
            <div>
                {fuko.map(f =>(
                    <>
                    <div style={imagen}>
                    Imagen
                </div>
                <div>
                    <h3>{f.name}</h3>
                    <p>{f.description}</p>
                    <span> $ {f.price}</span>
                    <span>Stock:{f.stock}</span>
                    <span> 5 reviews </span>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
                </>
                ))}
            </div>
          )
    }
        return (
            <p>404</p>
        ) 
    
}
