import React, { useEffect, useState } from "react";
import ProductList from "./ListProduct/productList";
import CategoryList from "./ListCategory/categoryList";
import axios from 'axios'
import { useParams } from "react-router-dom";
// import style from './catalogue.module.css'
import Spinner from '../Spinner/spinner'
import Pagination from './Pagination/pagination'

const getProduct = axios.get(`${process.env.REACT_APP_API_URL}/products`);
const getCategory = axios.get(`${process.env.REACT_APP_API_URL}/categories`);

const Catalogue = () => {
  const [ product, setProduct ] = useState([]);
  const [ category, setCategory ] = useState([]);
  const { cat } = useParams();

  // PAGINATION CONSTANTS
  const [ currentPage, setCurrentPage ] = useState (1);
  const [ loading, setLoading ] = useState(false);
  const [ postsPerPage ] = useState(8)

  const [filter, setFilter] = useState(false)
  function filterCat(){
    setFilter(!filter)
  }

  useEffect(() => {
    if(cat){
      setLoading( true )
      axios.get(`${process.env.REACT_APP_API_URL}/products/search/${cat}`)
      .then((productCategory)=>{ setProduct(productCategory.data) });
      setLoading( false )
    } else {
      setLoading( true )
      getProduct.then((res) => { setProduct(res.data) });
      setLoading( false )
    }
    getCategory.then((res) => { setCategory(res.data) });
  }, [filter]);
  //aca avisa un "cat"


  // PAGINATION VARIABLES
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = ( pageNumber ) => {
    setCurrentPage(pageNumber) }

  const handlerSearch = (search) => {
    setLoading(true)
    
    setCurrentPage(1);

    axios
      .get(`${process.env.REACT_APP_API_URL}/products/search?data=${search}`)
      .then( res => { setProduct( res.data ) } )
      .catch( err => console.log( err ) );
    setLoading( false )
  }

  const handlerFilter = (categoria)=>{
    
    setCurrentPage(1);

    axios.get(`${process.env.REACT_APP_API_URL}/products/search/${categoria}`)
    .then((res) => { setProduct(res.data) })
  }

  const handlerClear = ()=>{
    
    setCurrentPage(1);
    getProduct.then((res) => { setProduct(res.data) });
  }
  
  if(loading){
    return <Spinner />
  }
  return (
    <>
    
      <div className={`firstContainer container col-12 col-lg-10 text-center pb-0 mb-5`}>
        <h1 className="display-4">Catalogue</h1>
        <div className="mt-5 my-3 mx-0 mx-xl-5 px-xl-5">
          <CategoryList filterCat={filterCat} category={category} filter={handlerFilter} onSearch={handlerSearch} onClear={handlerClear}/>
        </div>
        <div className="d-flex justify-content-center">
          <Pagination postsPerPage={postsPerPage} totalPosts={product.length} paginate={paginate} />
        </div>
        <div className="">
          <ProductList product={currentPosts}/>
        </div>

      </div>
    </>
  );
};

export default Catalogue;
