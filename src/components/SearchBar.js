import React from 'react';

class SearchBar extends React.Component {

  render(){

    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.props.sort === "name"} onChange={() => this.props.updateSort("name")}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.props.sort === "price"} onChange={() => this.props.updateSort("price")}/>
          Price
        </label>
        <br/>
        <label>
          <strong>Filter:</strong>
          <select onChange={(e) => this.props.updateFilter(e.target.value)}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
  
}

export default SearchBar;
