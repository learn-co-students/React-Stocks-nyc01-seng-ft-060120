import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let stocks = this.props.stocks.map(stock => <Stock stock={stock} clickHandler={this.props.clickHandler}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           stocks
          }
      </div>
    );
  }

}

export default PortfolioContainer;
