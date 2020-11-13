import React, { useState } from "react";
import {  Redirect } from "react-router-dom";



//Searchbar
export default function SearchBar({ onSearch, onClear }) {
  const [search, setSearch] = useState();
  const [flag, setFlag] = useState(false);

  const handlerInput = (e) => {
    setSearch(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
    onSearch(search);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className="form-inline">
        <div className="col-12">
          <input
            onChange={handlerInput}
            className="form-control mr-2 mb-3 d-flex flex-row"
            value={search}
            type="text"
            placeholder="Search . . "
            aria-label="Search"
          ></input>
        </div>
        <div className="col-12">
        <button className="btn btn-dark my-sm-0 mr-1 " type="submit">
          Submit
        </button>
        
        {flag ? <Redirect to={`/products/search?data=${search}`} /> : <></>}
        <button
          className="btn btn-dark my-sm-0"
          type="button"
          onClick={onClear}
        >
          Clear
        </button>
        </div>
      </form>
    </>
  );
}
