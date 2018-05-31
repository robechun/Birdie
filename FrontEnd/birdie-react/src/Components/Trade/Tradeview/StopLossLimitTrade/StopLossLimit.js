import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';

class StopLossLimit extends Component {

    constructor(props){
        super(props)

        this.handleStopLossLimit = this.handleStopLossLimit.bind(this);
    }


    handleStopLossLimit(){
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        console.log("StopLossLimit Invoked");

        // POST ENDPOINT: /trade/market?type={type}&symbol={symbol}&amt={amount}
        const baseURL = "http://localhost:8080/trade/stopLossLimit?";
        const symbolParam = "symbol=";
        const amtParam = "amt="
        const priceParam = "price="
        const triggerParam = "trigger="
        const append = "&";

        let symbolInput = document.getElementById("StopLossLimitSymbol").value;
        let amtInput = document.getElementById("StopLossLimitAmt").value;
        let priceInput = document.getElementById("StopLossLimitPrice").value;
        let triggerInput = document.getElementById("StopLossLimitTrigger").value;

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt
        //Accounts for '.09132' to make '0.9132' instead
        if(amtInput[0] === '.'){
            amtInput = "0" + amtInput;
        }

        axios({
            method: 'post',
            url: baseURL + symbolParam + symbolInput + append + amtParam + amtInput + append + priceParam + priceInput + append + triggerParam + triggerInput,
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
                <Header>Stop Loss Limit</Header>
                <Form>
                    <Input id="StopLossLimitSymbol" placeholder="Symbol" />
                    <Input id="StopLossLimitAmt" placeholder="Amount" />
                    <Input id="StopLossLimitPrice" placeholder="Price" />
                    <Input id="StopLossLimitTrigger" placeholder="Trigger" />
                </Form>
                <Button onClick={this.handleStopLossLimit}>Set Stop Loss Limit</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(StopLossLimit);