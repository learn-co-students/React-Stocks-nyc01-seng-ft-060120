import React from 'react'

const Stock = ({stock, handleStockCardClick}) => {
let { id, name, ticker, price } = stock
return(
  
  <div>
    
    <div className="card" onClick={()=>handleStockCardClick(id)}>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text">{
            `${ticker}: $${price}`
          }</p>
      </div>
    </div>


  </div>
)};

export default Stock
