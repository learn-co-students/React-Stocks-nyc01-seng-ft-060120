import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map((stock) => (
          <Stock
            stocksHandler={this.props.stocksHandler}
            key={stock.id}
            stock={stock}
          />
        ))}
      </div>
    );
  }
}

export default StockContainer;
