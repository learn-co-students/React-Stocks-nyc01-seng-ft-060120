import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(response => this.setState({stocks: response}))
  }

  stockPurchaser = (e) => {
    console.log(e.target.parentElement.parentElement.parentElement)
    let id = e.target.id
    if (this.state.portfolio.find(portfolioStock => portfolioStock.id == id))
    {this.stockSeller(e, id)} else {
      fetch(`http://localhost:3000/stocks/${id}`)
    .then(response => response.json())
    .then(obj => this.stockHandler(obj))
    }
  }

  stockSeller = (e, id) => {
    e.target.parentElement.parentElement.parentElement.innerHTML = ''
  }

  stockHandler = (obj) => {
    let newArray = [obj,...this.state.portfolio]
    this.setState({portfolio: newArray})
  }

  searchBarListener = (e) => {
    if (e.target.value == "Alphabetically"){
      console.log(e.target, "Alphabetically")
      this.sortAlphabetically(e)
    } else if (e.target.value == "Price") {
      this.sortByPrice(e)
    } 
  }

  sortAlphabetically = (e) => {
    let newArray = this.state.stocks.sort((a, b) => a.ticker.localeCompare(b.ticker))
    this.setState({stocks: newArray})
  }

  sortByPrice = (e) => {
    let newArray =this.state.stocks.sort(function(a, b){
      if(a.price < b.price) { return -1; }
      if(a.price > b.price) { return 1; }
      return 0;
  })
  this.setState({stocks: newArray})
  }

  filterBarHandler = (e) => {
    if (e.target.value === "Sportswear"){
      let newArray = this.state.stocks.filter(stock => stock.type === "Sportswear")
      this.setState({stocks: newArray})
    } else if (e.target.value === "Tech"){
      let newArray = this.state.stocks.filter(stock => stock.type === "Tech")
      this.setState({stocks: newArray})
    } else if (e.target.value === "Finance"){
      let newArray = this.state.stocks.filter(stock => stock.type === "Finance")
      this.setState({stocks: newArray})
    }
  }

  render() {
    return (
      <div>
        <SearchBar searchBarListener={this.searchBarListener} filterBarHandler={this.filterBarHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stockPurchaser={this.stockPurchaser} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolio} stockPurchaser={this.stockPurchaser}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
