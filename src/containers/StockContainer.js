import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let { stocksList, handleStockCardClick } = this.props
    let stocksCards = stocksList.map(stock => <Stock key={stock.id} stock={stock} handleStockCardClick={handleStockCardClick} />)
    return (
      <div>
        <h2>Stocks</h2>
        {
          stocksCards
        }
      </div>
    );
  }

}

export default StockContainer;
