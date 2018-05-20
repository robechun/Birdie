import React, { Component } from 'react'

import NavBar from '../NavBar/NavBarWatchlist'
import WatchlistCoinTable from './WatchlistCoinTable/WatchlistCoinTable';
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'

class Watchlist extends Component {

    render() {
        return (

            <div className="blackout">
                <NavBar/>
                <div className="left LandingPageChart">
                    <LandingPageChartTwo/>
                </div>

                <div className="right CoinTable">
                    <WatchlistCoinTable/>
                </div>
            </div>
        )
    }
}

export default Watchlist;
