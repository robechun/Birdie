import React, { Component } from 'react'

import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import NavBar from '../NavBar/NavBar'
import WatchlistCoinTable from './WatchlistCoinTable/WatchlistCoinTable';
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'

class Watchlist extends Component {

    componentWillMount(){
        if(this.props.accessToken){
            console.log(this.props.accessToken.data);
        }
    }

    render() {
        return (

            <div className="blackout">
                <NavBar/>
                <div className="left LandingPageChart">
                    <LandingPageChartTwo accessTokenObj = {this.props.accessToken.data}/>
                </div>

                <div className="right WatchlistCoinTable">
                    <WatchlistCoinTable accessTokenObj = {this.props.accessToken.data}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});

export default connect(mapStateToProps, {newToken})(Watchlist);
