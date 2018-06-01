import React, { Component } from 'react'
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'
import NavBar from './../NavBar/NavBarTrade'
import BuySellSetLimit from './BuySellSetLimit/BuySellSetLimit'

import {Grid} from 'semantic-ui-react'
import Tradeview from "./Tradeview/Tradeview";


class Trade extends Component {
    render() {
        return (

            <div className="full">
                <NavBar/>
                    <Tradeview/>
            </div>

        )
    }
}

export default Trade;
