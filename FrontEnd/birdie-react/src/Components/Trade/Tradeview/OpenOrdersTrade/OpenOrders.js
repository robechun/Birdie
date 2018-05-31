import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';

class OpenOrders extends Component {

    constructor(props){
        super(props)

        this.handleOpenOrders = this.handleOpenOrders.bind(this);
    }

    handleOpenOrders(){
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        console.log("OpenOrders Invoked");

        // POST ENDPOINT: /trade/market?type={type}&symbol={symbol}&amt={amount}
        const baseURL = "http://localhost:8080/trade/openOrders?";
        const symbolParam = "symbol=";

        let symbolInput = document.getElementById("OpenOrdersSymbol").value;

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt

        axios({
            method: 'get',
            url: baseURL + symbolParam + symbolInput,
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
                <Header>Open Orders</Header>
                <Form>
                    <Input id="OpenOrdersSymbol" placeholder="Symbol" />
                </Form>
                <Button onClick={this.handleOpenOrders}>Open Orders</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(OpenOrders);