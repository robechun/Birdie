import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility
} from 'semantic-ui-react'
  
import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import NavBar from '../NavBar/NavBar'
import WatchlistCoinTable from './WatchlistCoinTable/WatchlistCoinTable';
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'
import footer from '../footer/footer'

class Watchlist extends Component {

    componentWillMount(){
        if(this.props.accessToken){
            console.log(this.props.accessToken.data);
        }
    }

    render() {
        return (

            <div className="full blackout">
                <NavBar/>
                <div className="left LandingPageChart">
                    <LandingPageChartTwo accessTokenObj = {this.props.accessToken.data}/>
                </div>

                <div className="right WatchlistCoinTable">
                    <WatchlistCoinTable accessTokenObj = {this.props.accessToken.data}/>
                </div>
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
                                <Header as='h4' inverted>Watchlist</Header>
                                <p>Learn about your watchlist</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});

export default connect(mapStateToProps, {newToken})(Watchlist);
