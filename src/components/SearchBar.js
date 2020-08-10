import React from 'react';

class SearchBar extends React.Component{

  filterClick = (e) => {
    this.props.filterHandler(e.target.value)
  }
  render() {

    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.props === 'Alphabetically'} onChange={this.props.checkAlphaHandler}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={null} onChange={null}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.filterClick}>
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
