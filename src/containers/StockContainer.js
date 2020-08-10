import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stockObj => <Stock key={stockObj.id} stock={stockObj} stockAction={this.props.addPortfolio}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
