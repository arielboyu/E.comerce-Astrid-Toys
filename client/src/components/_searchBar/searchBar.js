import React, { useState } from 'react';
//Searchbar
export default function SearchBar() {
  return (
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Buscar . . " aria-label="Search"></input>
      <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Submit</button>
    </form>
  );
};
