import React, { useEffect, useState } from "react";
import ProductList from "../_productList/productList";
import CategoryList from "../_productList/categoryList";
import axios from 'axios'
import { useParams } from "react-router-dom";
import style from './catalogue.module.css'

const getProduct = axios.get(`${process.env.REACT_APP_API_URL}/products`);
const getCategory = axios.get(`${process.env.REACT_APP_API_URL}/categories`);

const Catalogue = () => {
  const [ product, setProduct ] = useState([]);
  const [ category, setCategory ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState (1);
  const [ postPerPage, setPostsPerPage ] = useState(10)
  const [ loading, setLoading ] = useState(false);
  const { cat } = useParams();

  useEffect(() => {
    if(cat){
      axios.get(`${process.env.REACT_APP_API_URL}/products/search/${cat}`)
      .then((productCategory)=>{ setProduct(productCategory.data) })
    } else {
      getProduct.then((res) => { setProduct(res.data) });
    }
    getCategory.then((res) => { setCategory(res.data) });
  }, [cat]);

  const handlerSearch = (search) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/search?data=${search}`)
      .then((res) => { setProduct(res.data) })
  }

  const handlerFilter = (categoria)=>{
    axios.get(`${process.env.REACT_APP_API_URL}/products/search/${categoria}`)
    .then((res) => { setProduct(res.data) })
  }

  const handlerClear = ()=>{
    getProduct.then((res) => { setProduct(res.data) });
  }

  return (
    <>
      <div className={`${style.containerCatalogue} container col-12 col-lg-10 text-center pb-0 mb-5`}>
        <h1 className="display-4">Catalogue</h1>
        <div className="my-4 mx-0 mx-xl-5 px-xl-5">
          <CategoryList category={category} filter={handlerFilter} onSearch={handlerSearch} onClear={handlerClear}/>
        </div>
        <div className="">
          <ProductList product={product}/>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
