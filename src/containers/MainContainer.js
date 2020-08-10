import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [], 
    filter: ""
  }

  componentDidMount() {
    this.getStocks()
  }

  getStocks() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(json => this.setState({stocks: json}))
  }

  clickHandler = (key) => {
    let stockArray = [...this.state.stocks]
    let stock = stockArray.find(stock => stock.id === key)
    if (typeof stock.owned === 'undefined') {
      stock.owned = true
    } else {
      stock.owned = !stock.owned
    }
    this.setState({stocks: stockArray})
  }

  sortHandler = (e) => {
    if (e.target.value === 'Alphabetically') {
      this.alphaSort()
    } else {
      this.priceSort()
    }
  }

  filterHandler = (e) => {
    this.setState({filter: e.target.value})
  }

  alphaSort() {
    let newArray = [...this.state.stocks]
    newArray.sort((a,b) => {
      if (a.name < b.name) {
        return -1
      } else if (b.name < a.name) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({stocks: newArray})
  }

  priceSort() {
    let newArray = [...this.state.stocks]
    newArray.sort((a,b) => a.price - b.price)
    this.setState({stocks: newArray})
  }

  render() {
    return (
      <div>
        <SearchBar sortHandler={this.sortHandler} filterHandler={this.filterHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks}  clickHandler={this.clickHandler} filter={this.state.filter}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.stocks} clickHandler={this.clickHandler} filter={this.state.filter}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
