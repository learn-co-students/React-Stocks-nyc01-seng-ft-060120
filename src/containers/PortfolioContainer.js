import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.stocks.map((stock) => (
          <Stock
            stocksHandler={this.props.stocksHandler}
            key={stock.id}
            stock={stock}
            portfolioHandler={this.props.portfolioHandler}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
