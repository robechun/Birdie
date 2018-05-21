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

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps);
    //     if(nextProps.accessToken){
    //         this.setState({
    //             token : nextProps.accessToken.data.accessToken
    //         }, () => {
    //             this.componentWillMount();
    //         })
    //         //this.props.accessToken.data;
    //     }
    // }

    componentWillMount(){
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }


        // GET REQUEST ON STANDBY
        const queryURL = "http://localhost:8080/wallet/balance"
        //const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjY1NzQzNjUsImV4cCI6MTUyNzE3OTE2NX0.HYr-Rrs7qUMeHf2RxNz3xdrZ360B54xBTBnVKkcFt-Dh49didBOeIpAWfU452kbStbvqFlAgBzJrx-7vtMzoDg"
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
            <div>
              <NavBar/>
              <div className="righttable">
                <h2>
                  Coin Table
                </h2>
                <WalletCoinTable data={this.state.data}/>
              </div>
              <div className="leftchart">
                <h2>
                  Overall
                </h2>
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