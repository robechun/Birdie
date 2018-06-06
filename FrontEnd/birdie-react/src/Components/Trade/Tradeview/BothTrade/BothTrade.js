import React, { Component } from 'react'
import { Grid, Header, Button, Form, Input, Modal, Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {newToken} from "../../../../Actions/loginActions";
import axios from 'axios';
import {CoinPairs} from "../../../../Resources/CoinPairs"

class BothTrade extends Component {

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

        console.log("BothTrade Invoked");

        // POST ENDPOINT: /trade/market?type={type}&symbol={symbol}&amt={amount}
        const baseURL = "http://159.65.72.45:8080/trade/both?";
        const symbolParam = "symbol=";
        const laParam = "la="
        const lpParam = "lp="
        const saParam = "sa="
        const spParam = "sp="
        const thresholdParam = "threshold="
        const append = "&";

        let symbolInput = this.state.symbolValue; // Symbol drop down menu value
        let laInput = document.getElementById("bothLa").value;
        let lpInput = document.getElementById("bothLp").value;
        let saInput = document.getElementById("bothSa").value;
        let spInput = document.getElementById("bothSp").value;
        let thresholdInput = document.getElementById("bothThreshold").value;

        // TODO: Account of valid symbols, whitespace, case-sensitivity, buy/sell type, alpha chars in amt
        //Accounts for '.09132' to make '0.9132' instead
        if(laInput[0] === '.'){
            laInput = "0" + laInput;
        }

        if(saInput[0] === '.'){
            saInput = "0" + saInput;
        }

        axios({
            method: 'post',
            url: baseURL + symbolParam + symbolInput + append + laParam + laInput + append + lpParam + lpInput + append + saParam + saInput + append + spParam + spInput + append + thresholdParam + thresholdInput,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
            this.setState({
                open : true,
                modalHeader : <p className="success">Success!</p>,
                modalBody : <p>Limit and Stop was successfully placed!</p>
            });
        }).catch((error) => {
            let response = error.response.data.message;
            this.setState({
                open : true,
                modalHeader : <p className = "error">Something Went Wrong...</p>,
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

        return (
            <Grid.Column>
                <Header>Both</Header>
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
                    <Input id="bothLa" placeholder="Limit Amount" />
                    <Input id="bothLp" placeholder="Limit Price" />
                    <Input id="bothSa" placeholder="Stop Amount" />
                    <Input id="bothSp" placeholder="Stop Price" />
                    <Input id="bothThreshold" placeholder="Threshold"/>
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
                <Button onClick={this.handleLimitTrade}>Limit and Stop Trade</Button>
            </Grid.Column>
        )
    }
}


const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(BothTrade);