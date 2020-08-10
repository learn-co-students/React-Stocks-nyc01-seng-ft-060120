import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let { portfolioList, handleStockCardClick } = this.props
    let stocksCards = portfolioList.map(stock => <Stock key={stock.id} stock={stock} handleStockCardClick={handleStockCardClick} />)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
              stocksCards
          }
      </div>
    );
  }

}

export default PortfolioContainer;
