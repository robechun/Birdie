import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MarketTrade from "./MarketTrade/MarketTrade";
import LimitTrade from "./LimitTrade/LimitTrade";
import StopLoss from "./StopLossTrade/StopLoss";
import StopLossLimit from "./StopLossLimitTrade/StopLossLimit";
import CancelAll from "./CancelAllTrade/CancelAll";
import OpenOrders from "./OpenOrdersTrade/OpenOrders"

class Tradeview extends Component {

    render() {
        return (
            <div className="full">
                <Grid textAlign='right' columns={2}>
                    <Grid.Row>
                        {/*
                            All trade requests are very similar but parsed in separate components in
                            the case of backend changes with endpoint integrations
                        */}
                        <MarketTrade/>
                        <LimitTrade/>
                    </Grid.Row>
                    <Grid.Row>
                        <StopLoss/>
                        <StopLossLimit/>
                    </Grid.Row>
                    <Grid.Row>
                        <CancelAll/>
                        <OpenOrders/>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}

export default Tradeview;