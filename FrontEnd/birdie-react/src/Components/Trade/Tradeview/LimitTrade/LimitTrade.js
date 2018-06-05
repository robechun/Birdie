import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input, Modal, Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';
import {CoinPairs} from "../../../../Resources/CoinPairs"

class LimitTrade extends Component {

    constructor(props){
        super(props);

        this.state = {
            open : false,
            modalHeader : <p/>,
            modalBody : <p/>,
            searchQuery : ""
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLimitTrade = this.handleLimitTrade.bind(this);
    }

    toggleModal(){
        this.setState({
            open : !this.state.open
        });
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

        let typeInput = this.state.type; // Type drop down menu value
        let symbolInput = this.state.symbolValue; // Symbol drop down menu value
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
            this.setState({
                open : true,
                modalHeader : <p className="success">Success!</p>,
                modalBody : <p>Limit was successfully placed!</p>
            });
            // Create a success modal when this occurs
        }).catch((error) => {
            console.log(error);
            this.setState({
                open : true,
                modalHeader : <p className = "error">Something Went Wrong...</p>,
                modalBody : <p>Limit was placed incorrectly.</p>
            });
            // Create an error modal when this occurs
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
        console.log(this.state.type);

        return (
            <Grid.Column>
                <Header>Limit</Header>
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
                    <Input id="limitTradeAmt" placeholder="Amount" />
                    <Input id="limitTradePrice" placeholder="Price" />
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
                <Button onClick={this.handleLimitTrade}>Limit Trade</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(LimitTrade);