import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import fetcher from '../fetcher'

const api = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
      stocksList: [],
      sortFields: {name: false, price: false},
      filterField: null
  }

  handleSortClick = (e) => {
      let newSortFields = this.state.sortFields
      let name = e.target.name
      let noneChecked = !Object.values(newSortFields).some(a=>a)
      if (noneChecked) {
        newSortFields[name] = !newSortFields[name]
      } else {
        Object.keys(newSortFields).forEach(key => {
          newSortFields[key] = !newSortFields[key]
        })
      }
      this.setState({sortFields: newSortFields})
  }

  componentDidMount() {
    fetcher(api, this.initialStateCommit)
  }

  initialStateCommit = (StocksArray) => {
    this.setState({ stocksList: StocksArray})
  }

  handleBuy = (id) => {
    let newStocksList = [...this.state.stocksList]
    let boughtStock = newStocksList.find(stock=> stock.id === id)
    if (!boughtStock.purchased) {
      boughtStock.purchased = true
      this.setState({ stocksList: newStocksList})
    }
  }

  handleSell = (id) => {
    let newStocksList = [...this.state.stocksList]
    let soldStock = newStocksList.find(stock=> stock.id === id)
    soldStock.purchased = false
    this.setState({ stocksList: newStocksList})
  }

  portfolioList = () => this.sortedStocksList().filter( stock => stock.purchased )

  sortedStocksList = () => {
    let { sortFields, stocksList } = this.state
    let sortKey = Object.keys(sortFields).find(key => sortFields[key])
    let key = sortKey ? sortKey : "id"
    if (this.filteredStocksList().length) {
      let sortedStocksList = [...this.filteredStocksList()]
      sortedStocksList.sort((a, b) => a[key] > b[key] ? 1 : -1  )
      return sortedStocksList
    } else {
      return this.filteredStocksList()
    } 
  }

  handleFilterChange = (e) => {
    let { value } = e.target
    this.setState({filterField: value})
  }

  filteredStocksList = () => {
    let { filterField, stocksList } = this.state
    return filterField ? stocksList.filter(({type}) => type === filterField) : stocksList
  }



  render() {
    let { sortFields } = this.state
    console.log(this.filteredStocksList())
    return (
      <div>
        <SearchBar 
            sortFields={sortFields}
            handleSortClick={this.handleSortClick}
            handleFilterChange={this.handleFilterChange}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                  stocksList={this.sortedStocksList()}
                  handleStockCardClick={this.handleBuy}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                  portfolioList={this.portfolioList()}
                  handleStockCardClick={this.handleSell}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
