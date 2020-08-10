import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    search: {
      sort: null,
      filter: null
    }
  }

  fetchStocks = () => {
    fetch('http://localhost:4000/stocks')
    .then(resp => resp.json())
    .then(data => this.setState({stocks: data}))
  }

  portAdd = (stock) => {
    if (this.state.portfolio.find(portObj => portObj.id === stock.id)){
      window.alert('Stock already in portfolio')
    } else {
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  }

  portRemove = (stock) => {
    let array = this.state.portfolio
    let index = array.indexOf(array.find(portObj => portObj.id === stock.id))
    array.splice(index, 1)
    this.setState({portfolio: array})
  }

  sortFn = (type) => {
    this.setState({search: {
      sort: type,
      filter: this.state.search.filter
    }})
  }

  filterFn = (type) => {
    if (type === "None") {type = null}
    this.setState({search: {
      sort: this.state.search.sort,
      filter: type
    }})
  }

  filteredStocks = (input) => {
    let array = [...input]

    if (this.state.search.sort === "Alphabetically") {
      array.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (b.name > a.name) {
          return -1;
        } else {
          return 0;
        }
      })
    } else if (this.state.search.sort === "Price") {
      array.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else if (b.price > a.price) {
          return -1;
        } else {
          return 0;
        }
      })
    }

    if (this.state.search.filter) {
      array = array.filter(stock => stock.type === this.state.search.filter)
    }

    return array;
  }

  componentDidMount(){
    this.fetchStocks();
  }

  render() {
    return (
      <div>
        <SearchBar search={this.state.search} sortFn={this.sortFn} filterFn={this.filterFn}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filteredStocks(this.state.stocks)} portAdd={this.portAdd}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.filteredStocks(this.state.portfolio)} portRemove={this.portRemove}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
