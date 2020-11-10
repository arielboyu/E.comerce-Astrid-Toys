import React, { useEffect, useState } from "react";
import ProductList from "../_productList/productList";
import CategoryList from "../_productList/categoryList";
import axios from 'axios'
import { useParams } from "react-router-dom";

const getProduct = axios.get("http://localhost:3002/products");
const getCategory = axios.get("http://localhost:3002/categories");

const Catalogue = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const {cat} = useParams();
  useEffect(() => {
    if(cat){
      axios.get(`http://localhost:3002/products/search/${cat}`)
      .then((productCategory)=>{
        setProduct(productCategory.data);
      })
    } else {
      getProduct.then((res) => {
        setProduct(res.data);
      });
    }
    getCategory.then((res) => {
      setCategory(res.data);
    });
  }, [cat]);

  console.log("Nombre de categoria "+cat)
  
  const handlerSearch = (search) => {
    axios
      .get(`http://localhost:3002/products/search?data=${search}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      });
  }

  const handlerFilter = (categoria)=>{
    axios.get(`http://localhost:3002/products/search/${categoria}`)
    .then((res) => {
      setProduct(res.data);
    })
  }

  const handlerClear = ()=>{
    getProduct.then((res) => {
      setProduct(res.data);
    });
  }

  return (
    <>
      <div className="mx-auto text-center w-75 mt-5">
        <h1 className="display-3 d-none d-sm-block">Titulo</h1>
        <h2 className="d-block d-sm-none">Titulo Catalogo</h2>
      </div>
      <div className="container-fluid p-5 ">
        <div className="row">
          <div className="border shadow d-none d-sm-flex col-xs-11 col-s-5 col-md-5 col-lg-4 col-xl-3  flex-column pt-3 mx-3 m-1 mb-4 rounded ">
            <CategoryList category={category} filter={handlerFilter} onSearch={handlerSearch} onClear={handlerClear}/>
          </div>
          <div className="d-flex col-xs-11 col-s-6 col-md-5 col-lg-6 col-xl-8 pb-3 mx-3 mb-1 rounded ">
            <ProductList product={product}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
