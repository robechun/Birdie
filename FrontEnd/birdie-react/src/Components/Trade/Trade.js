import React, { Component } from 'react'
import NavBar from './../NavBar/NavBar'

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
