import React, { useEffect, useState } from "react";
import axios from 'axios';
const getProduct = axios.get("http://localhost:3002/products");

const UpdateForm = ()=> {
    const [product, setProduct]= useState([]);
    useEffect(()=>{
        console.log(product)
        getProduct.then((res)=>{
          setProduct(res.data)
        })
      },[product])    

};