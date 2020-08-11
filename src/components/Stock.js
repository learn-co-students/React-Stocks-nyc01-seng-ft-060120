import React from 'react'

const Stock = (props) => (
  <div onClick={() => props.clickStock(props.stockInfo)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.stockInfo.name}</h5>
        <p className="card-text">{props.stockInfo.ticker}: {props.stockInfo.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
