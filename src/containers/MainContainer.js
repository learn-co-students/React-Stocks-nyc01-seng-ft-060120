import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

let stocksUrl = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filter: "All",
    sort: "None"
  }

  componentDidMount(){
    fetch(stocksUrl)
    .then(resp => resp.json())
    .then(data => this.setState({ stocks: data}))
  }

  buyStock = (stock) => {
    if (!this.state.portfolio.find(s => s.id === stock.id)){
      let newPortfolio = [stock, ...this.state.portfolio]
      this.setState({
        portfolio: newPortfolio
      })
    }
  }
  
  sellStock = (stock) => {
    let newPortfolio = this.state.portfolio.filter(s => s.id !== stock.id)
    this.setState({
      portfolio: newPortfolio
    })
  }

  updateFilter = (filterUpdate) => {
    this.setState({
      filter: filterUpdate
    })
  }

  updateSort = (sortUpdate) => {
    this.setState({
      sort: sortUpdate
    })
    this.state.stocks.sort(this.compareValues(sortUpdate))
    this.state.portfolio.sort(this.compareValues(sortUpdate))
  }

  filterStocks = () => {
    if(this.state.filter === "All"){
      return this.state.stocks
    }else{
      return this.state.stocks.filter(stock => stock.type === this.state.filter)      
    }  
  }

  filterPortfolio = () => {
    if(this.state.filter === "All"){
      return this.state.portfolio
    }else{
      return this.state.portfolio.filter(stock => stock.type === this.state.filter)      
    }  
  }

  compareValues = (sort, order = 'asc') => {
    return function innerSort(a, b) {
      const varA = (typeof a[sort] === 'string')
        ? a[sort].toUpperCase() : a[sort];
      const varB = (typeof b[sort] === 'string')
        ? b[sort].toUpperCase() : b[sort];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      )
    }
  }

  render() {
    return (
      <div>
        <SearchBar sort={this.state.sort} updateFilter={this.updateFilter} updateSort={this.updateSort} compareValues={this.compareValues}/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.buyStock} stocks={this.filterStocks()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer clickHandler={this.sellStock} stocks={this.filterPortfolio()} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
