import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

let api = `http://localhost:3000/stocks/`

class MainContainer extends Component {

  state = {
    stocks: [],
    myStocks: [],
    filter: ""
  }
  
  componentDidMount(){
    fetch(api).then(resp => resp.json()).then(data => this.setState({ stocks: data}))
  }

  clickStock = (obj) => {
    this.setState({ myStocks: [...this.state.myStocks, obj]})
  }

  removeStock = (obj) =>{
    console.log('remove stock', obj)
    let newArray = this.state.myStocks.filter(stock => stock.id !== obj.id)
    this.setState({ myStocks: newArray })
  }

  filterStock = (e) => {
    this.setState({filter: e.target.value})
   
  }

  alphaBtn = () => {
    let alpha = this.state.stocks.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

      this.setState({stocks: alpha})
  }

  priceBtn = () => {
    let price = this.state.stocks.sort(function(a, b) {
      var textA = a.price
      var textB = b.price
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

      this.setState({stocks: price})
  }


  
  render() {
   
    return (
      <div>
        <SearchBar priceBtn={this.priceBtn} alphaBtn={this.alphaBtn} filterStock={this.filterStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filter={this.state.filter} clickStock={this.clickStock} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer clickStock={this.removeStock} myStocks={this.state.myStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
