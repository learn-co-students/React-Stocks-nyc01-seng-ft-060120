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
    fetch(`http://localhost:3000/stocks`)
      .then(resp => resp.json())
      .then(data => this.setState({
        stocks: data
      }))
  }

  stockContainerClickHandler = (id) => {
    let stock = this.state.stocks.find(stock => stock.id === id)
    let newArray = [...this.state.portfolio, stock]
    this.setState({portfolio: newArray})
    // fetch(`http://localhost:3000/stocks/${id}`)
    //   .then(resp => resp.json())
    //   .then(data => this.setState({
    //     portfolio: [...this.state.portfolio, data]
    //   }))
  }

  portfolioClickHandler = (id) => {
    let newArray = this.state.portfolio.filter(stock => stock.id !== id)
    this.setState({portfolio: newArray})
  }

  alphabeticalChangeHandler = () => {
    let newArray = this.state.stocks.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
    //let newArray = this.state.stocks.sort((a, b) => a.name.localCompare(b.name))
    this.setState({stocks: newArray})
  }

  priceChangeHandler = () => {
    let newArray = this.state.stocks.sort(function(a,b){
      if (a.price > b.price) { return -1; }
      if (a.price < b.price) { return 1; }
      return 0;
    })
    this.setState({ stocks: newArray })
  }

  filterChangeHandler = (e) => {
    let value = e.target.value 
    let filteredArray = this.state.stocks.filter(stock => stock.type === value) 
    // return this.state.stocks.filter(stock => stock.type === value) 
    let newArray = [...this.state.stocks.slice(-1, -1), filteredArray]
    console.log(newArray, this.state.stocks)
    this.setState({stocks: filteredArray})
  }

  render() {
    return (
      <div>
        <SearchBar alphabeticalChangeHandler={this.alphabeticalChangeHandler} priceChangeHandler={this.priceChangeHandler} filterChangeHandler={this.filterChangeHandler}/>

          <div className="row">
            <div className="col-8">

              {/* <StockContainer stocks={this.state.stocks} clickHandler={this.stockContainerClickHandler}/> */}
              <StockContainer stocks={this.state.stocks} clickHandler={this.stockContainerClickHandler}/>


            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} clickHandler={this.portfolioClickHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
