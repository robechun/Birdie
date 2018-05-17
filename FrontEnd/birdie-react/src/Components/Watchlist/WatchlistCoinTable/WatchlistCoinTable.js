import React, { Component } from 'react'
import { Icon, Table, Button, Modal, Input } from 'semantic-ui-react'
import CoinRow from './WatchlistCoinRow'
import axios from 'axios'
import Websocket from 'react-websocket';

class CoinTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            //data: this.props.coinlist
            data:[],
            openAdd: false,
            openDelete: false,
            openClear: false,
        }

        this.addWatchlist = this.addWatchlist.bind(this);
        this.deleteWatchlist = this.deleteWatchlist.bind(this);
        this.clearWatchlist = this.clearWatchlist.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
        this.toggleClearModal = this.toggleClearModal.bind(this);
    }

    componentWillMount(){
        const queryURL = "http://localhost:8080/watchlist"
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjY1NzQzNjUsImV4cCI6MTUyNzE3OTE2NX0.HYr-Rrs7qUMeHf2RxNz3xdrZ360B54xBTBnVKkcFt-Dh49didBOeIpAWfU452kbStbvqFlAgBzJrx-7vtMzoDg"
        //GET REQUEST STANDBY
        axios({
            method: 'get',
            url: queryURL,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
                console.log("response: " + response.data)
                this.setState({
                    data : response.data
                })
            }
        ).catch((error) => {
            console.log(error);
        });
    }

    clearWatchlist(){
        //DELETE (CLEAR) REQUEST STANDBY
        const queryURL = "http://localhost:8080/watchlist/clear"
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjY1NzQzNjUsImV4cCI6MTUyNzE3OTE2NX0.HYr-Rrs7qUMeHf2RxNz3xdrZ360B54xBTBnVKkcFt-Dh49didBOeIpAWfU452kbStbvqFlAgBzJrx-7vtMzoDg";
        axios({
            method: 'delete',
            url: queryURL,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            let tempData = this.state.data;

            tempData.splice(0,tempData.length);

            console.log(tempData);
            this.setState({
                data : tempData
            }, () => {
                this.toggleClearModal();
                console.log(this.state.data);
            });
        }).catch((error) => {
            console.log(error);
        });

    }

    deleteWatchlist(){
        //DELETE REQUEST STANDBY
        console.log("Deleting");
        const queryURL = "http://localhost:8080/watchlist/delete/" //symbol to append
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjY1NzQzNjUsImV4cCI6MTUyNzE3OTE2NX0.HYr-Rrs7qUMeHf2RxNz3xdrZ360B54xBTBnVKkcFt-Dh49didBOeIpAWfU452kbStbvqFlAgBzJrx-7vtMzoDg";
        axios({
            method: 'delete',
            url: queryURL + document.getElementById("delete").value,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            let tempData = this.state.data;
            let index = -1;
            let flag = false;
            for(let i = 0; i < tempData.length; i++){
                if(tempData[i] === document.getElementById("delete").value) {
                    flag = true
                    break;
                }
                index++;
            }
            if(flag) {
                console.log("Index: " + index);
                tempData.splice(index + 1, 1);
            }

            console.log(tempData);
            this.setState({
                data : tempData
            }, () => {
                this.toggleDeleteModal();
                console.log(this.state.data);
            });
        }).catch((error) => {
            console.log(error);
        });

    }

    addWatchlist(){
        // TODO: make sure the coin being added is valid

        const queryURL = "http://localhost:8080/watchlist/add/" //symbol to append
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjY1NzQzNjUsImV4cCI6MTUyNzE3OTE2NX0.HYr-Rrs7qUMeHf2RxNz3xdrZ360B54xBTBnVKkcFt-Dh49didBOeIpAWfU452kbStbvqFlAgBzJrx-7vtMzoDg";
        let symbol = document.getElementById("add").value;
        let url = queryURL + symbol;
        console.log(symbol);
        //POST REQUEST STANDBY
        axios({
            method: 'post',
            url: url,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
                let tempData = this.state.data;
                tempData.push(document.getElementById("add").value);
                console.log(tempData);
                this.setState({
                    data : tempData
                }, () => {
                    this.toggleAddModal();
                    console.log(this.state.data);
                });
            }
        ).catch((error) => {
            console.log(error), () => {
                this.toggleAddModal();
            };
        });
    }

    toggleAddModal(){
        this.setState({
            openAdd: !this.state.openAdd
        });
    }

    toggleDeleteModal(){
        this.setState({
            openDelete: !this.state.openDelete
        })
    }

    toggleClearModal(){
        this.setState({
            openClear : !this.state.openClear
        })
    }

    render() {

        return (
            <div>
                <Table celled inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Symbol</Table.HeaderCell>
                            <Table.HeaderCell>Value</Table.HeaderCell>
                            <Table.HeaderCell>24hr % Change</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.state.data.map((i) => {
                                //for(let i = 0 ; i < this.state.data.length; i++) {
                                return (

                                        <CoinRow coinSymbol={i}  key={i}>Test</CoinRow>
                                )
                                //}
                            })
                        }
                        <Table.Row>
                            <Table.Cell>
                                <Button positive onClick={this.toggleAddModal} content="Add Coin"/>
                                <Modal size="mini" open={this.state.openAdd} onClose={this.toggleAddModal}>
                                    <Modal.Header>
                                        Add to Watchlist
                                    </Modal.Header>
                                    <Modal.Content>
                                        <p>Input a coin symbol to add to your watchlist</p>
                                        <Input id = "add"/>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button negative onClick={this.toggleAddModal}>
                                            Cancel
                                        </Button>
                                        <Button positive icon='checkmark' labelPosition='right' content='Add' onClick={this.addWatchlist}/>
                                    </Modal.Actions>
                                </Modal>
                                </Table.Cell>
                                <Table.Cell>
                                <Button negative onClick={this.toggleDeleteModal} content="Delete Coin"/>
                                <Modal size="mini" open={this.state.openDelete} onClose={this.toggleDeleteModal}>
                                    <Modal.Header>
                                        Delete from Watchlist
                                    </Modal.Header>
                                    <Modal.Content>
                                        <p>Input a coin symbol to delete from your watchlist</p>
                                        <Input id = "delete"/>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button negative onClick={this.toggleDeleteModal}>
                                            Cancel
                                        </Button>
                                        <Button positive icon='checkmark' labelPosition='right' content='Delete' onClick={this.deleteWatchlist}/>
                                    </Modal.Actions>
                                </Modal>
                            </Table.Cell>

                            <Table.Cell>
                                <div>
                                    <Button negative onClick={this.toggleClearModal} content="Clear List"/>
                                    <Modal size="mini" open={this.state.openClear} onClose={this.toggleClearModal}>
                                        <Modal.Header>
                                            Clear Watchlist
                                        </Modal.Header>
                                        <Modal.Content>
                                            <p>Are you sure you want to Clear your Watchlist?</p>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button negative onClick={this.toggleClearModal}>
                                                Cancel
                                            </Button>
                                            <Button positive icon='checkmark' labelPosition='right' content='Clear' onClick={this.clearWatchlist}/>
                                        </Modal.Actions>
                                    </Modal>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CoinTable;
