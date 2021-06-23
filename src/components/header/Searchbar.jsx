import React from 'react';
import { BsSearch } from 'react-icons/bs';

function Searchbar() {
  return (
    <label htmlFor="searchbar">
      <div className="SearchDiv">
        <BsSearch />
        <input className="SearchBar" id="searchbar" type="text" placeholder="Busca" />
      </div>
    </label>
  );
}

export default Searchbar;
