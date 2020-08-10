import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const baseUrl = 'http://localhost:3000/stocks'    

class MainContainer extends Component {
  
  state = {
    stocks: [],
    favorites: [],
    sort: "",
    filter: "All"
  }

  componentDidMount(){
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(resp => this.setState({stocks: resp}))

  }

  clickHandler = (obj) => {
    if(this.state.favorites.includes(obj)){
      let newArray = this.state.favorites.filter(sd => sd.id !== obj.id)
      this.setState({favorites: newArray})
    }else{
      let newArray = [...this.state.favorites, obj]
      this.setState({favorites: newArray})
    }
  }

  sortHandler = (obj) => {
    this.setState({sort: obj}, () => {
      if(this.state.sort === "Alphabetically"){
        let newArray = [...this.state.stocks]
        newArray.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({stocks: newArray})

      }
      if(obj === "Price"){
        let newArray = [...this.state.stocks]
        newArray.sort(function(a,b){ return b.price - a.price; })
        console.log(newArray)
        this.setState({stocks: newArray})
      }
  })

   
  }

  filterHandler = (obj) =>  {
    this.setState({filter: obj})
  }

  filterStocks = () => {
    let filteredStocks = [...this.state.stocks]

    if(this.state.filter !== 'All'){
      filteredStocks = filteredStocks.filter(stock => stock.type === this.state.filter )  
    } 

    return filteredStocks
     
  }


  render() {
    let filterStocks = this.filterStocks()
    return (
      <div>
        <SearchBar sortHandler={this.sortHandler} filterHandler={this.filterHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={filterStocks} clickHandler={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.favorites} clickHandler={this.clickHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
