import React from 'react';


const SearchBar = (props) => {
  const filterChangeHandler = (e) => {
    props.filterChangeHandler(e)
  }
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={props.alphabeticalChangeHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={props.priceChangeHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterChangeHandler}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
