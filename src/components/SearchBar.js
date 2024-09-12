import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilter = () => {
    // Logic for filter action
    console.log("Filter applied");
  };

  return (
    <div className="input-group mb-3 my-3 p-2">
      <input type="text" className="form-control me-2 rounded" placeholder="Search Menu" value={searchText} onChange={handleSearchChange}/>
      <div className="input-group-append">
        <button className="btn btn-success" type="button" onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
};

export default SearchBar;
