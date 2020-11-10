import React, { useState } from 'react';
import {Link, useParams, NavLink, Redirect} from 'react-router-dom'
import ProductList from '../_productList/productList'
import axios from 'axios'

//Searchbar
export default function SearchBar({onSearch, onClear}) {

    const [search, setSearch] = useState()
    const [flag, setFlag] = useState(false)
  
    const handlerInput = (e) =>{
      setSearch(e.target.value)
    }

    const handlerSubmit = (e) =>{
      e.preventDefault()
      setFlag(true)
      onSearch(search)
      setSearch("")
    }


  
  return (
    <>
    <form onSubmit={handlerSubmit} className="form-inline d-none d-md-block">
      <input onChange={handlerInput} className="form-control mr-sm-2" value={search} type="text" placeholder="Search . . " aria-label="Search"></input>
      <button className="btn btn-dark my-2 my-sm-0" type="submit">Submit</button>
      {flag ? <Redirect to={`/products/search?data=${search}`}/> : <></>}
      <button className="btn btn-dark my-2 my-sm-0" type="button" onClick={onClear}>Clear</button>
    </form>
    </>
  );
};
