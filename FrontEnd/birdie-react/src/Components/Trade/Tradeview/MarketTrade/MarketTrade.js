import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';

class MarketTrade extends Component {

    handleMarketTrade(){
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        console.log("MarketTrade Invoked");

        // POST ENDPOINT: /trade/market?type={type}&symbol={symbol}&amt={amount}
        const baseURL = "http://localhost:8080/trade/market?";
        const typeParam = "type=";
        const symbolParam = "symbol=";
        const amtParam = "amt="
        const append = "&";

        let typeInput = document.getElementById("marketTradeType").value;
        let symbolInput = document.getElementById("marketTradeSymbol").value;
        let amtInput = document.getElementById("marketTradeAmt").value;

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt
        //Accounts for '.09132' to make '0.9132' instead
        if(amtInput[0] === '.'){
            amtInput = "0" + amtInput;
        }

        axios({
            method: 'post',
            url: baseURL + typeParam + typeInput + append + symbolParam + symbolInput + append + amtParam + amtInput,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
            // Create a success modal when this occurs
        }).catch((error) => {
            console.log(error);
            // Create an error modal when this occurs
        });
    }

    // | /trade/market?type={type}&symbol={symbol}&amt={amount}
    render() {
        return (
                <Grid.Column>
                    <Header>Market</Header>
                    <Form>
                        <Input id="marketTradeType" placeholder="Type" />
                        <Input id="marketTradeSymbol" placeholder="Symbol" />
                        <Input id="marketTradeAmt" placeholder="Amount" />
                    </Form>
                    <Button onClick={this.handleMarketTrade}>Market Trade</Button>
                </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(MarketTrade);