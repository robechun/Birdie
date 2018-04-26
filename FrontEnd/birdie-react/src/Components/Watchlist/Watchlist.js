import React, { Component } from 'react'

import NavBar from './../NavBar/NavBar';
import CoinTable from './CoinTable/CoinTable';


class Watchlist extends Component {
  render() {
    return (

        <div>
        <NavBar/>
        <h1 className="centerize">
        Watchlist
          </h1>
      <div className="right">
      <CoinTable/>
      </div>
      <div>
      <h2 className="left">
      WatchListChart
      </h2>
      </div>
      </div>
    )
  }
}

export default Watchlist;
