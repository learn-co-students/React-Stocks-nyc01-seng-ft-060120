import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  stocksToRender() {
    if (this.props.filter) {
      return this.props.stocks.filter(stock => stock.type === this.props.filter)
    } else {
      return this.props.stocks
    }
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.stocksToRender().map(stock => <Stock stock={stock} key={stock.id} clickHandler={this.props.clickHandler}/>)}
      </div>
    );
  }

}

export default StockContainer;
