import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log(this.props.portfolio)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock => <Stock key={stock.id} stock={stock} stockAction={this.props.removeFromPortfolio}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
