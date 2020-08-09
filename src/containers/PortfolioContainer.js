import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let portfolioStocks = this.props.portfolioStocks.map(portfolioStock => <Stock key={portfolioStock.id} stock={portfolioStock} stockPurchaser={this.props.stockPurchaser}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {portfolioStocks}
      </div>
    );
  }

}

export default PortfolioContainer;
