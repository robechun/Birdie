import React, { Component } from 'react'
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'
import NavBar from './../NavBar/NavBarTrade'
import BuySellSetLimit from './BuySellSetLimit/BuySellSetLimit'
import {Grid, List, Segment, Header, Container} from 'semantic-ui-react'

class Trade extends Component {
    render() {
        return (

            <div className = 'blackout'>
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
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                    <List.Item as='a'>Sitemap</List.Item>
                                    <List.Item as='a'>Contact Us</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Learn' />
                                <List link inverted>
                                    <List.Item as='a'>Binance</List.Item>
                                    <List.Item as='a'>Investing in Crypto</List.Item>
                                    <List.Item as='a'>How To Access</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>Birdie</Header>
                                <p>Secure your financial future. Create an account now.</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
            </div>

        )
    }
}

export default Trade;
