import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

let baseUrl = 'http://localhost:3000/stocks'
class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    filterStocks: [],
    sort: ''
  }
  componentDidMount() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(stocks => this.setState({ stocks: stocks, filterStocks: stocks }))
  };

  stockHandler = (obj) => {
    if(this.state.portfolioStocks.includes(obj)) {
      let newPortfolio = this.state.portfolioStocks.filter(stock => stock.id !== obj.id)
      this.setState({
        portfolioStocks: newPortfolio
      })
    }else{
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, obj]
      })
    }
  };

  filterHandler = (value) => {
    let stock = this.state.filterStocks
    
    if (value === 'Tech') {
      this.setState({
        stocks: stock.filter(stock => stock.type === 'Tech')
      })
    } else if (value === 'Finance') {
      this.setState({
        stocks: stock.filter(stock => stock.type === 'Finance')
      })
    } else if (value === 'Sportswear'){
      this.setState({
        stocks: stock.filter(stock => stock.type === 'Sportswear')
      }) 
    }
  };

  checkAlphaHandler = () => {
    
  }

  render() {
    return (
      <div>
        <SearchBar filterHandler={this.filterHandler} />

          <div className="row">
            <div className="col-8">

            <StockContainer stocks={this.state.stocks} stockHandler={this.stockHandler} filterHandler={this.filterHandler}/>

            </div>
            <div className="col-4">

            <PortfolioContainer portfolioStocks={this.state.portfolioStocks} stockHandler={this.stockHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
