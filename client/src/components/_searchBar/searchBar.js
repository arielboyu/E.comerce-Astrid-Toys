import React, { useState } from 'react';
//Searchbar
export default function SearchBar() {
  return (
    <form class="form-inline d-none d-md-block">
      <input class="form-control mr-sm-2" type="text" placeholder="Search . . " aria-label="Search"></input>
      <button class="btn btn-dark my-2 my-sm-0" type="submit">Submit</button>
    </form>
  );
};
