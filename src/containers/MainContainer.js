import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filter: "",
    sort: ""
  }

  componentDidMount() {
    fetch ("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stockData => {
      this.setState({
        stocks: stockData
      })
    })
  }

  addToPortfolio = (obj) => {
    if (!this.state.portfolio.find(thing => thing.id === obj.id)) {
      this.setState({
        portfolio: [...this.state.portfolio, obj]
      })
    }
  }

  removeFromPortfolio = (obj) => {
    this.setState ({
      portfolio: this.state.portfolio.filter(thing => thing.id !== obj.id)
    })
  }

  priceSort = () => {
    if (this.state.sort === "" || this.state.sort === "Alphabetically") {
      this.setState({
        sort: "Price"
      })
    } else {
      this.setState({
        sort: ""
      })
    }
  }

  alphabeticalSort = () => {
    if (this.state.sort === "" || this.state.sort === "Price") {
      this.setState({
        sort: "Alphabetically"
      })
    } else {
      this.setState({
        sort: ""
      })
    }
  }
  
  filterStocks = (value) => {
    this.setState({
      filter: value
    })
  }

 

  sortStocks = () => {
    let stocks = this.state.stocks
    if (this.state.filter === "Tech") {
      stocks = stocks.filter(stock => stock.type === "Tech")
    } else if (this.state.filter === "Finance") {
      stocks = stocks.filter(stock => stock.type === "Finance")
    } else if (this.state.filter === "Sportswear") {
      stocks = stocks.filter(stock => stock.type === "Sportswear")
    }

    if (this.state.sort === "Alphabetically") {
      return stocks.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (this.state.sort === "Price") {
      return stocks.sort((a,b) => a.price > b.price ? 1 : -1)
    } else {
      return stocks
    }
  }



  render() {
    // console.log(this.state)
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} priceSort={this.priceSort} alphabeticalSort={this.alphabeticalSort} sort={this.state.sort} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.sortStocks()} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
