import React from 'react'

class Stock extends React.Component {
  render(){

    return(
      <div>
        <div onClick={(e)=>{
            this.props.clickHandler(this.props.stock)
          }}className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.stock.name}</h5>
            <p className="card-text">{this.props.stock.ticker} – {this.props.stock.price}</p>
          </div>
        </div>
      </div>
    )}
}

export default Stock
