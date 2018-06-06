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
import Footer from '../Footer/Footer'

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
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});

export default connect(mapStateToProps, {newToken})(Watchlist);
