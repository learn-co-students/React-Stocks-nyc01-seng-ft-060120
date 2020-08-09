import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stockArray: [],
    portfolio: [],
    sort: "",
    filter: ""
  }

  updatePortfolio = obj => {
    if (this.state.portfolio.includes(obj)) {
      let updatedPortfolio = this.state.portfolio.filter(stock => stock.id !== obj.id)
      this.setState({
        portfolio: updatedPortfolio
      })
    } else {
      let updatedPortfolio = [...this.state.portfolio, obj]
      this.setState({ 
        portfolio: updatedPortfolio
      })
    }
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

  abcSort = () => {
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

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => {
      this.setState({
        stockArray: stocks
      })
    })
  }

  filterStocks = (value) => {
    this.setState({
      filter: value
    })
  }

  sortStocks = () => {
    let stocks = this.state.stockArray
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
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} priceSort={this.priceSort} abcSort={this.abcSort} sort={this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stockArray={this.sortStocks()} updatePortfolio={this.updatePortfolio} abcClicked={this.state.abcClicked}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} updatePortfolio={this.updatePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
