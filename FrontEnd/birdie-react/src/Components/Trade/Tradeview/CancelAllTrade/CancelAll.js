import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';

class CancelAll extends Component {

    handleCancelAll(){
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        console.log("CancelAll Invoked");

        // POST ENDPOINT: /trade/market?type={type}&symbol={symbol}&amt={amount}
        const baseURL = "http://localhost:8080/trade/cancelAll?";
        const symbolParam = "symbol=";

        let symbolInput = document.getElementById("CancelAllSymbol").value;

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt

        axios({
            method: 'post',
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
                <Header>Cancel All</Header>
                <Form>
                    <Input id="CancelAllSymbol" placeholder="Symbol" />
                </Form>
                <Button onClick={this.handleCancelAll}>Cancel All</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(CancelAll);