import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let stocks = this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} stockPurchaser={this.props.stockPurchaser}/>)
    return (
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    );
  }

}

export default StockContainer;
