import React from 'react'

class Stock extends React.Component {

  clickHandler = (e) => {
    this.props.stockPurchaser(e)
  }

  render(){

    return(
      <div>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title" onClick={this.clickHandler} id={this.props.stock.id}>{
            this.props.stock.name
          }</h5>
        <p className="card-text">{this.props.stock.ticker}: {this.props.stock.price}</p>
      </div>
    </div>


  </div>
    )
  }
}

export default Stock
