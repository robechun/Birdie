import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input, Modal, Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';
import {CoinPairs} from "../../../../Resources/CoinPairs"

class MarketTrade extends Component {
    constructor(props){
        super(props)

        this.state = {
            open : false,
            modalHeader : <p/>,
            modalBody : <p/>,
            searchQuery : "",
            type : ""
        }

        this.handleMarketTrade = this.handleMarketTrade.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            open : !this.state.open
        });
    }

    handleMarketTrade(){
        let token = "";

        try {
            console.log("accessToken");
            token = this.props.accessToken.data.accessToken;
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        console.log("MarketTrade Invoked");

        // POST ENDPOINT: /trade/market?type={type}&symbol={symbol}&amt={amount}
        const baseURL = "http://159.65.72.45:8080/trade/market?";
        const typeParam = "type=";
        const symbolParam = "symbol=";
        const amtParam = "amt="
        const append = "&";

        let typeInput = this.state.type; // Type drop down menu value
        let symbolInput = this.state.symbolValue; // Symbol drop down menu value
        let amtInput = document.getElementById("marketTradeAmt").value;

        console.log(baseURL + typeParam + typeInput + append + symbolParam + symbolInput + append + amtParam + amtInput);

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
            this.setState({
                open : true,
                modalHeader : <p className="success">Success!</p>,
                modalBody : <p>Trade was successfully placed!</p>
            });
        }).catch((error) => {
            console.log(error);
            this.setState({
                open : true,
                modalHeader : <p className="error">Something Went Wrong...</p>,
                modalBody : <p>Trade was placed incorrectly.</p>
            });
        });
    }

    handleChange = (e, { value }) => {
        this.setState({
            searchQuery: value,
            symbolValue: value
        })
    }

    handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

    handleTypeChange = (e, { value }) => {
        this.setState({
            type : value
        });
    }

    render() {
        const typeOptions = [
            {key: "Sell", value: "Sell", text:"Sell"},
            {key: "Buy", value: "Buy", text:"Buy"}
        ]

        let searchQuery = this.state.searchQuery;
        let value = this.state.symbolValue;
        let type = this.state.type;
        console.log(this.state.symbolValue)
        console.log(this.state.type);
        return (
                <Grid.Column>
                    <Header>Market</Header>
                    <hr/>
                    <Form>
                        <Dropdown
                            fluid
                            selection
                            onChange={this.handleTypeChange}
                            options = {typeOptions}
                            placeholder = "Type"
                            value = {type}
                        />
                        {/*<span>Type<Input fluid id="marketTradeType" placeholder="Type" /></span>*/}
                        <Dropdown
                            fluid
                            selection
                            onChange={this.handleChange}
                            onSearchChange={this.handleSearchChange}
                            options = {CoinPairs}
                            placeholder="Symbol"
                            search
                            searchQuery={searchQuery}
                            value = {value}
                        />
                        <Input id="marketTradeAmt" placeholder="Amount" />
                    </Form>
                    <Modal size="mini" open={this.state.open} onClose={this.toggleModal}>
                        <Modal.Header>
                            {this.state.modalHeader}
                        </Modal.Header>
                        <Modal.Content>
                            {this.state.modalBody}
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.toggleModal}>
                                Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
                    <Button onClick={this.handleMarketTrade}>Market Trade</Button>
                </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(MarketTrade);