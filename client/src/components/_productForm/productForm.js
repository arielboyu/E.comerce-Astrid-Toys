import React, { useEffect, useState } from "react";
import Category from "../_category/category.js";
import axios from 'axios';
const getProduct = axios.get("http://localhost:3002/products");

const Producto = () => {
  const [product, setProduct]= useState([]);
  
  useEffect(()=>{
    console.log('hola',product)
    getProduct.then((res)=>{
      setProduct(res.data)
    })
    console.log('chau',product)
  },[product])
  
  const removeData = (id) => {

    axios.delete(`http://localhost:3002/products/${id}`).then(res => {
        const del = product.filter(product => id !== product.id)
        setProduct(del)
    })
}
  return (
        <div>
          <button>Insert Product</button>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Active</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
                {product.map((prod)=>
                  <tr>
                    <th scope="row">{prod.id}</th>
                    <td>{prod.name}</td>
                    <td>{prod.description}</td>
                    <td>{prod.price}</td>
                    <td>{prod.stock}</td>
                    <td>{prod.active}</td>
                    <td>
                      <button>Update</button>
                    </td>
                    <td>
                      <button onClick={() => removeData(prod.id)}>Delete</button>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>

        // // <button type='submit'>Realizar</button>
        // <Category>
        //   {/* El formulario debe poder:
        //       -Agregarle una o mas categorias al producto que estamos cargando
        //       -Eliminar una categoria en el caso de que nos hayamos equivocado */}
        // </Category>

  );
};

export default Producto;
