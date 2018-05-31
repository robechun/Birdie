import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';

class StopLoss extends Component {

    constructor(props){
        super(props)

        this.handleStopLoss = this.handleStopLoss.bind(this);
    }

    handleStopLoss(){
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        console.log("StopLoss Invoked");

        // POST ENDPOINT: /trade/market?type={type}&symbol={symbol}&amt={amount}
        const baseURL = "http://159.65.72.45:8080/trade/stopLoss?";
        const symbolParam = "symbol=";
        const amtParam = "amt="
        const priceParam = "price="
        const append = "&";

        let symbolInput = document.getElementById("StopLossSymbol").value;
        let amtInput = document.getElementById("StopLossAmt").value;
        let priceInput = document.getElementById("StopLossPrice").value;

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt
        //Accounts for '.09132' to make '0.9132' instead
        if(amtInput[0] === '.'){
            amtInput = "0" + amtInput;
        }

        axios({
            method: 'post',
            url: baseURL + symbolParam + symbolInput + append + amtParam + amtInput + append + priceParam + priceInput,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
            // Create a success modal when this occurs
        }).catch((error) => {
            console.log(error);
            // Create an error modal when this occurs
        });
    }

    render() {
        return (
            <Grid.Column>
                <Header>Stop Loss</Header>
                <Form>
                    <Input id="StopLossSymbol" placeholder="Symbol" />
                    <Input id="StopLossAmt" placeholder="Amount" />
                    <Input id="StopLossPrice" placeholder="Price" />
                </Form>
                <Button onClick={this.handleStopLoss}>Set Stop Loss</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(StopLoss);