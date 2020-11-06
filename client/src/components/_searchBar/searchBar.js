import React, { useState } from 'react';
//Searchbar
export default function SearchBar() {
  return (
    <form className="form-inline d-none d-md-block">
      <input className="form-control mr-sm-2" type="text" placeholder="Search . . " aria-label="Search"></input>
      <button className="btn btn-dark my-2 my-sm-0" type="submit">Submit</button>
    </form>
  );
};
