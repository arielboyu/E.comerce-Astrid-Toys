import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom'


export default function SearchBar({ onSearch, onClear }) {
  const [search, setSearch] = useState();
  const [flag, setFlag] = useState(false);
  const localy = useHistory()

  const handlerInput = (e) => {
    setSearch(e.target.value);
  };
const handlerClear = () => {
  onClear()
  localy.push("/products")
}
  const handlerSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
    onSearch(search);
    setSearch("");
    localy.push(`/products/search?data=${search}`)
  };

  return (
      <form onSubmit={handlerSubmit} className="d-flex col-12 justify-content-center justify-content-lg-end">
        <div>
          <input onChange={handlerInput}
            className="form-control mr-2"
            value={search}
            type="text"
            placeholder="Search . . "
            aria-label="Search"
          ></input>
        </div>
        <button className="btn btn-dark ml-2 mr-1" type="submit"> Submit </button> 
              {/* flag ? <Redirect to={`/products/search?data=${search}`} /> : <></> */}
        <button className="btn btn-dark my-sm-0" type="button" onClick={handlerClear} > Clear </button>
        <div>

        </div>
      </form>

  );
}
