import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';

class LimitTrade extends Component {

    constructor(props){
        super(props)

        this.handleLimitTrade = this.handleLimitTrade.bind(this);
    }

    handleLimitTrade(){
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        console.log("LimitTrade Invoked");

        // POST ENDPOINT: /trade/market?type={type}&symbol={symbol}&amt={amount}
        const baseURL = "http://159.65.72.45:8080/trade/limit?";
        const typeParam = "type=";
        const symbolParam = "symbol=";
        const amtParam = "amt="
        const priceParam = "price="
        const append = "&";

        let typeInput = document.getElementById("limitTradeType").value;
        let symbolInput = document.getElementById("limitTradeSymbol").value;
        let amtInput = document.getElementById("limitTradeAmt").value;
        let priceInput = document.getElementById("limitTradePrice").value;

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt
        //Accounts for '.09132' to make '0.9132' instead
        if(amtInput[0] === '.'){
            amtInput = "0" + amtInput;
        }

        axios({
            method: 'post',
            url: baseURL + typeParam + typeInput + append + symbolParam + symbolInput + append + amtParam + amtInput + append + priceParam + priceInput,
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
                <Header>Limit</Header>
                <hr/>
                <Form>
                    <Input id="limitTradeType" placeholder="Type" />
                    <Input id="limitTradeSymbol" placeholder="Symbol" />
                    <Input id="limitTradeAmt" placeholder="Amount" />
                    <Input id="limitTradePrice" placeholder="Price" />
                </Form>
                <Button onClick={this.handleLimitTrade}>Limit Trade</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(LimitTrade);