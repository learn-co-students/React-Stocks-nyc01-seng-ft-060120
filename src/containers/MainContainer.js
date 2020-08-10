import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stocksUrl = `http://localhost:3000/stocks/`;
let selected = {}

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filterSelection: [],
    sort: []
  };

  componentDidMount() {
    fetch(stocksUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data), this.setState({ stocks: data });
      });
  }

  stocksHandler = (stock) => {
    this.setState({portfolio: [...this.state.portfolio, stock]})
  };

  removeHandler = (stock) => {
    let newArray = this.state.portfolio.filter(updateStock => updateStock.id !== stock.id )
    this.setState({portfolio: newArray})
  }

  checkHandler = (e) => {
    selected[e.target.value] = !selected[e.target.value]
    console.log(selected)
    let stocks = this.filterSelection || this.state.stocks
    if( e.target.value === 'Alphabetically' && selected[e.target.value] === true) {
      this.setState({filterSelection: stocks.sort((a,b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })})
    }

    if (
      e.target.value === "Alphabetically" &&
      selected[e.target.value] === false
    ) { this.setState({filterSelection: this.state.stocks})}
      if (e.target.value === "Price") {
        this.setState({
          filterSelection: stocks.sort((a, b) => {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
          }),
        });
      }
  }

  filterHandler = (e) => {
    let newStocks = e.target.value !== 'All' ?
    this.state.stocks.filter(stock => stock.type === e.target.value) :
    this.state.stocks
    this.setState({filterSelection: newStocks})
  }

  displayStocks = () => {
    return !!this.state.filterSelection  ? this.state.filterSelection : this.state.stocks
  }

  render() {
    let stocks = this.displayStocks()
    return (
      <div>
        <SearchBar sort={this.state.sort} filter={this.state.filterSelection} filterHandler={this.filterHandler} checkHandler={this.checkHandler}/>

        <div className='row'>
          <div className='col-8'>
            <StockContainer
              stocksHandler={this.stocksHandler}
              stocks={this.state.stocks}
              display={stocks}
            />
          </div>
          <div className='col-4'>
            <PortfolioContainer stocksHandler={this.removeHandler} stocks={this.state.portfolio} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
