import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  // portfolioClickHandler = () => {
  //   this.props.clickHandler(this.props.stocks.id)
  //   console.log(this.props.stock)
  // }

  render() {
    let stocks = this.props.stocks.map(stockObj => <Stock key={stockObj.id} stock={stockObj} clickHandler={this.props.clickHandler}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {stocks}
      </div>
    );
  }

}

export default PortfolioContainer;
