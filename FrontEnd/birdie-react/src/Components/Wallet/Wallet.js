import React, { Component } from 'react'

import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import WalletCoinTable from './WalletCoinTable/WalletCoinTable';
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'

class Wallet extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : []
        }

    }

    componentWillMount(){
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
            console.log(token)
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        // GET REQUEST ON STANDBY
        const queryURL = "http://localhost:8080/wallet/balance"
        axios({
            method: 'get',
            url: queryURL,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            let tempData = response.data;
            this.setState({
                data: tempData
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="full blackout">
              <NavBar/>
              <div className="righttable Wallet">
                <WalletCoinTable data={this.state.data}/>
              </div>
              <div className="leftchart">
                <LandingPageChartTwo/>
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});



export default connect(mapStateToProps, {newToken})(Wallet);