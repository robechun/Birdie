import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input, Modal} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';

class OpenOrders extends Component {

    constructor(props){
        super(props);

        this.state = {
            open : false,
            modalHeader : <p/>,
            modalBody : <p/>
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

        let symbolInput = document.getElementById("OpenOrdersSymbol").value;

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt

        axios({
            method: 'get',
            url: baseURL + symbolParam + symbolInput,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
            this.setState({
                open : true,
                modalHeader : <p>Success!</p>,
                modalBody : <p>Orders Opened!</p>
            });
            // Create a success modal when this occurs
        }).catch((error) => {
            console.log(error);
            this.setState({
                open : true,
                modalHeader : <p>Something Went Wrong...</p>,
                modalBody : <p>Orders unable to be Opened.</p>
            });
            // Create an error modal when this occurs
        });
    }

    render() {
        return (
            <Grid.Column>
                <Header>Open Orders</Header>
                <hr/>
                <Form>
                    <Input id="OpenOrdersSymbol" placeholder="Symbol" />
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
                <Button onClick={this.handleOpenOrders}>Open Orders</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(OpenOrders);