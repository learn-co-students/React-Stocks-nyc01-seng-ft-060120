import React from 'react';

const SearchBar = (props) => {

  let clickHandler = (e) => {
    props.searchBarListener(e)
  }

  let changeHandler = (e) => {
    props.filterBarHandler(e)
  }
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input onClick={clickHandler} type="radio" value="Alphabetically" checked={null} onChange={null}/>
        Alphabetically
      </label>
      <label>
        <input onClick={clickHandler} type="radio" value="Price" checked={null} onChange={null}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={changeHandler}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
