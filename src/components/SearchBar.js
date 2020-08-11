import React from 'react';

class SearchBar extends React.Component {
  
  state = {
    radio: true,
    sort: "",
    filter: ""
  }

  render(){
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.radio} onChange={(e)=> {
            this.setState({radio: !this.state.radio})
            this.setState({sort: e.target.value}, () => {
              this.props.sortHandler(this.state.sort)
              })
            
            }}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={!this.state.radio} onChange={(e)=> {
            this.setState({radio: !this.state.radio})
            this.setState({sort: e.target.value}, () => {
                this.props.sortHandler(this.state.sort)
              })
            }}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={(e)=> {
            this.setState({filter: e.target.value}, ()=> {
              this.props.filterHandler(this.state.filter)
            })
            }}>
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
