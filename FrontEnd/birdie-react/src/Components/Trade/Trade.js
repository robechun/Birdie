import React, { Component } from 'react'
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'
import NavBar from './../NavBar/NavBar'
import BuySellSetLimit from './BuySellSetLimit/BuySellSetLimit'
import {Grid} from 'semantic-ui-react'

class Trade extends Component {
    render() {
        return (

            <div>
                <NavBar/>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <BuySellSetLimit/>
                        </Grid.Column>
                        <Grid.Column>
                            <LandingPageChartTwo/>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}

export default Trade;