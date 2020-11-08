import React, { useState } from 'react';
import {Link, useParams, NavLink} from 'react-router-dom'
import ProductList from '../_productList/productList'
import axios from 'axios'

//Searchbar
export default function SearchBar({handlerSearch}) {
//EventSearchBar>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const [search, setSearch] = useState()
    const [flag, setflag] = useState(null)
  
    const handlerInput = (e) =>{
      setSearch(e.target.value)
    }
    const {name} = useParams();


    const handlerSubmit = (e) =>{
      e.preventDefault()
      handlerSearch(search)
    }
//EventSearchBar>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <>
    <form onSubmit={handlerSubmit} className="form-inline d-none d-md-block">
      <input onChange={handlerInput} className="form-control mr-sm-2" type="text" placeholder="Search . . " aria-label="Search"></input>
      {/* <Link to={`/products/search?name=${search}`}> */}
        <button className="btn btn-dark my-2 my-sm-0" type="submit">Submit</button>
      {/* </Link> */}
    </form>
    {/* {flag? <ProductList product={search} />:<></>} */}
    </>
  );
};
