import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  filteredStocks() {
    return this.props.stocks.filter(stock => stock.owned)
  }

  stocksToRender() {
    if (this.props.filter) {
      return this.filteredStocks().filter(stock => stock.type === this.props.filter)
    } else {
      return this.filteredStocks()
    }
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.stocksToRender().map(stock => <Stock stock={stock} key={stock.id} clickHandler={this.props.clickHandler}/>)}
      </div>
    );
  }

}

export default PortfolioContainer;
