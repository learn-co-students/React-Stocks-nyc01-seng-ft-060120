import React from 'react';

const SearchBar = ({sortFields, handleSortClick, handleFilterChange}) => {
  let { name, price } = sortFields
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input 
            type="radio" 
            value="Alphabetically"
            name="name" 
            checked={name}
            onChange={handleSortClick}
        />
        Alphabetically
      </label>
      <label>
        <input 
            type="radio" 
            value="Price" 
            name="price"
            checked={price}
            onChange={handleSortClick}
        />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
