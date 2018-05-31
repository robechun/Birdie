import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input, Modal} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';

class MarketTrade extends Component {
    constructor(props){
        super(props)

        this.state = {
            open : false,
            modalHeader : <p/>,
            modalBody : <p/>
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

        let typeInput = document.getElementById("marketTradeType").value;
        let symbolInput = document.getElementById("marketTradeSymbol").value;
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
                modalHeader : <p>Success!</p>,
                modalBody : <p>Trade was successfully placed!</p>
            });
            // Create a success modal when this occurs
        }).catch((error) => {
            console.log(error);
            this.setState({
                open : true,
                modalHeader : <p>Something Went Wrong...</p>,
                modalBody : <p>Trade was placed incorrectly.</p>
            });
            // Create an error modal when this occurs
        });
    }

    // | /trade/market?type={type}&symbol={symbol}&amt={amount}
    render() {
        return (
                <Grid.Column>
                    <Header>Market</Header>
                    <hr/>
                    <Form>
                        <Input id="marketTradeType" placeholder="Type" />
                        <Input id="marketTradeSymbol" placeholder="Symbol" />
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
                            <Button negative onClick={this.toggleModal}>
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