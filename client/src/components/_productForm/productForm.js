import React, { useEffect, useState } from "react";
import Category from "../_category/category.js";
import axios from "axios";
const getProduct = axios.get("http://localhost:3002/products");

const Producto = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct.then((res) => {
      setProduct(res.data);
    });
  }, [product]);

  const handleDelete = (e) =>{
      console.log(e.target.name)
  }

  const removeData = (prod) => {
    console.log("entro a remove");
    console.log(prod)
    const data = { active: false };
    const id = prod.id;
    const headers =  {"Access-Control-Allow-Methods": true };
    axios.put(`http://localhost:3002/products/${id}`,data,headers).then((res) => {
      // const del = product.filter((product) => id !== product.id);
      // setProduct(del);
      console.log(res)
    });
  };
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
          {product.map((prod) => (
            <tr>
              <th scope="row">{prod.id}</th>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
              <td>{prod.active.toString()}</td>
              <td>
                <button>Update</button>
              </td>
              <td>
                <button onClick={()=>removeData(prod)}>Delete</button>
              </td>
            </tr>
          ))}
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
