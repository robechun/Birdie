import React, { Component } from 'react'
import { Grid, Header, Button, Form, Modal, Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';
import {CoinPairs} from "../../../../Resources/CoinPairs"
import Order from "./Order"

class OpenOrders extends Component {

    constructor(props){
        super(props);
        this.state = {
            open : false,
            modalHeader : <p/>,
            modalBody : <p/>,
            searchQuery : "",
            responseData : [],
            responseHTML: [
                {
                    clientOrderId : <p/>,
                    executedQty : <p/>,
                    icebergQty : <p/>,
                    orderId : <p/>,
                    origQty: <p/>,
                    price: <p/>,
                    side: <p/>,
                    status : <p/>,
                    stopPrice : <p/>,
                    symbol : <p/>,
                    time : <p/>,
                }
            ]
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
            let data = [];
            let obj = {};
            for(let i = 0; i < response.data.length; i++){
                obj = {
                    clientOrderId : <p>ClientId: {response.data[i].clientOrderId} </p>,
                    executedQty : <p>ExecutedQty: {response.data[i].executedQty} </p>,
                    icebergQty : <p>IcebergQty: {response.data[i].icebergQty} </p>,
                    orderId : <p>OrderId: {response.data[i].orderId} </p>,
                    origQty: <p>OrigQty: {response.data[i].origQty}</p>,
                    price: <p>Price: {response.data[i].price}</p>,
                    side: <p>Side: {response.data[i].side}</p>,
                    status : <p>Status: {response.data[i].status}</p>,
                    stopPrice : <p>StopPrice: {response.data[i].stopPrice}</p>,
                    symbol : <p>Symbol: {response.data[i].symbol}</p>,
                    time : <p>Time: {response.data[i].time}</p>,
                }
                data.push(obj);
            }
            this.setState({
                open : true,
                modalHeader : <p className="success">Success!</p>,
                modalBody : <p>Orders Opened!</p>,
                responseData : response.data,
                responseHTML : data,
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
        console.log(this.state.symbolValue);
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
                        <Order responseHTML = {this.state.responseHTML}/>
                        {/*{this.state.responseHTML[0].clientOrderId}*/}
                        {/*{this.state.responseHTML[0].executedQty}*/}
                        {/*{this.state.responseHTML[0].icebergQty}*/}
                        {/*{this.state.responseHTML[0].orderId}*/}
                        {/*{this.state.responseHTML[0].origQty}*/}
                        {/*{this.state.responseHTML[0].price}*/}
                        {/*{this.state.responseHTML[0].side}*/}
                        {/*{this.state.responseHTML[0].status}*/}
                        {/*{this.state.responseHTML[0].stopPrice}*/}
                        {/*{this.state.responseHTML[0].symbol}*/}
                        {/*{this.state.responseHTML[0].time}*/}
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