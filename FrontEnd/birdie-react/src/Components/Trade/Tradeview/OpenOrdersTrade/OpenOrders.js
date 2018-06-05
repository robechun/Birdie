import React, { Component } from 'react'
import { Grid, Header, Button, Form, Modal, Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';
import {CoinPairs} from "../../../../Resources/CoinPairs"

class OpenOrders extends Component {

    constructor(props){
        super(props);

        this.state = {
            open : false,
            modalHeader : <p/>,
            modalBody : <p/>,
            searchQuery : "",
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleOpenOrders = this.handleOpenOrders.bind(this);
    }

    toggleModal(){
        this.setState({
            open : !this.state.open
        });
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
        const baseURL = "http://159.65.72.45:8080/trade/openOrders?";
        const symbolParam = "symbol=";

        let symbolInput = this.state.symbolValue; // Symbol drop down menu value

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt

        axios({
            method: 'get',
            url: baseURL + symbolParam + symbolInput,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
            this.setState({
                open : true,
                modalHeader : <p className="success">Success!</p>,
                modalBody : <p>Orders Opened!</p>
            });
        }).catch((error) => {
            console.log(error);
            let response = error.response.data.message;
            this.setState({
                open : true,
                modalHeader : <p className="error">Something Went Wrong...</p>,
                modalBody : <p>{response}</p>
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

    render() {
        let searchQuery = this.state.searchQuery;
        let value = this.state.symbolValue;
        console.log(this.state.symbolValue)
        return (
            <Grid.Column>
                <Header>Open Orders</Header>
                <hr/>
                <Form>
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
                <Button onClick={this.handleOpenOrders}>Open Orders</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(OpenOrders);