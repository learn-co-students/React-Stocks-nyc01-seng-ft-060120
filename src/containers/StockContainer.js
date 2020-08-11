import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  state = {
    stocks: this.props.stocks
  }

  
  render() {
    let newArray = this.props.stocks.filter(obj => obj.type === this.props.filter)
    console.log("new array sorted", newArray)
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.filter === "" ? 
        this.props.stocks.map(obj => <Stock clickStock={this.props.clickStock} key={obj.id} stockInfo={obj}/>) 
        :
        newArray.map(obj => <Stock clickStock={this.props.clickStock} key={obj.id} stockInfo={obj}/>)
        }
        
      </div>
    );
  }

}

export default StockContainer;
