import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  getStock = () => {
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stockArray.map(stock => <Stock key={stock.id} stock={stock} updatePortfolio={this.props.updatePortfolio}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
