import React from 'react';

const SearchBar = (props) => {

  const sortHandler = (e) => {
    props.sortFn(e.target.value)
  }

  const checkedBool = (value) => {
    return props.search.sort === value
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={checkedBool("Alphabetically")} onChange={sortHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={checkedBool("Price")} onChange={sortHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterFn(e.target.value)}>
          <option value="None">No Filter</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
