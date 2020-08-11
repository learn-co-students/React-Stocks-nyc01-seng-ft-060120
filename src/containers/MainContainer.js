import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stocksUrl = `http://localhost:3000/stocks/`;

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: 'All',
    sort: 'None'
  };

  componentDidMount() {
    fetch(stocksUrl)
      .then((resp) => resp.json())
      .then((data) => {this.setState({ stocks: data });
      });
  }

  stocksHandler = (stock) => {
    !this.state.portfolio.includes(stock) ?
    this.setState({portfolio: [...this.state.portfolio, stock]}) :
    this.state.portfolio
  };

  removeHandler = (stock) => {
    let newArray = this.state.portfolio.filter(updateStock => updateStock.id !== stock.id )
    this.setState({portfolio: newArray})
  }

  checkHandler = (e) => {
    this.setState({sort: e.target.value})
  }

  filterHandler = (e) => {
    this.setState({filter: e.target.value})
  }

  displayStocks = (input) => {
    let filteredStocks = [...input]
    if (this.state.filter !== 'All') {
      filteredStocks = filteredStocks.filter(stock => stock.type === this.state.filter)
      return filteredStocks
    }

    switch  (this.state.sort) {
      case 'Alphabetically':
        return filteredStocks.sort((a, b) => a.name > b.name ? 1 : -1)
      case 'Price':
        return filteredStocks.sort((a, b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }
  }

  render() {
    let stocks = this.displayStocks(this.state.stocks)
    let portfolio = this.displayStocks(this.state.portfolio)
    return (
      <div>
        <SearchBar sort={this.state.sort} filter={this.state.filter} filterHandler={this.filterHandler} checkHandler={this.checkHandler}/>

        <div className='row'>
          <div className='col-8'>
            <StockContainer
              stocksHandler={this.stocksHandler}  
              stocks={stocks}
            />
          </div>
          <div className='col-4'>
            <PortfolioContainer stocksHandler={this.removeHandler} stocks={portfolio} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
