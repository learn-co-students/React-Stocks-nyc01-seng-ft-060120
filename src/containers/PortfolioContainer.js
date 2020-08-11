import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.myStocks.map(obj => <Stock clickStock={this.props.clickStock} key={obj.id} stockInfo={obj}/>)}
      </div>
    );
  }

}

export default PortfolioContainer;
