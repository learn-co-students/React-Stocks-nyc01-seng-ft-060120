import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortedBy==="Alphabetically"} onChange={props.changeSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortedBy==="Price"} onChange={props.changeSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeFilter}>
        <option value="" selected></option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
