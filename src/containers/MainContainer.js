import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {stocks:[], portfolio:[], sortedBy:"", filteredBy:""}

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({stocks:json}))
  }

  addToOrRemoveFromPortfolio = (stock) => {
    const foundStock = this.state.portfolio.find(s => stock.id===s.id)
    let newPortfolio
    if (foundStock)
    {
      newPortfolio = this.state.portfolio.filter(s => s.id !== stock.id)
    }
    else {
      newPortfolio = [...this.state.portfolio]
      newPortfolio.push(stock)
    }
    this.setState({portfolio: newPortfolio})
  }

  stockSort = (stockAr) => {
    if (this.state.sortedBy==="Alphabetically") {
      return stockAr.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
    }
    else if (this.state.sortedBy==="Price") {
      return stockAr.sort((stockA, stockB) => stockA.price-stockB.price)
    }
    else {return stockAr}
  }

  stockFilter = (stockAr) => {
    return stockAr.filter(stock => stock.type.includes(this.state.filteredBy))
  }

  sortedAndFiltered = (stockAr) => {
    return this.stockSort(this.stockFilter(stockAr))
  }

  changeSort = (e) => {
    this.setState({sortedBy: e.target.value})
  }

  changeFilter = (e) => {
    this.setState({filteredBy: e.target.value})
  }

  render() {
    return (
      <div>
        <SearchBar sortedBy={this.state.sortedBy} changeFilter={this.changeFilter} changeSort={this.changeSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addOrRemove={this.addToOrRemoveFromPortfolio} stocks={this.sortedAndFiltered(this.state.stocks)}/>

            </div>
            <div className="col-4">

              <PortfolioContainer addOrRemove={this.addToOrRemoveFromPortfolio} portfolio={this.sortedAndFiltered(this.state.portfolio)}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
