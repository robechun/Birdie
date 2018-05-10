import React, { Component } from 'react'
import { Icon, Table, Button, Modal, Input } from 'semantic-ui-react'
import CoinRow from './CoinRow'
import axios from 'axios'

class CoinTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            //data: this.props.coinlist
            data:["BTCETH, BTCXRP"],
            open: false
        }

        this.addWatchlist = this.addWatchlist.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    addWatchlist(){
        const queryURL = "http://localhost:8080/watchlist/add/" //symbol to append
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NTk5NDEsImV4cCI6MTUyNjU2NDc0MX0.xsr5utc8buRqO16RLQnX9JMP3U9N7l6LOkVrse_ya5JpzSciHeGIYFOmgff863kcYtvYmB8iLWxuWS8pKTihWQ";
        let symbol = document.getElementById("add").value;
        let url = queryURL + symbol;
        console.log(symbol);
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
                    this.toggleModal();
                });
            }
        ).catch((error) => {
            console.log(error), () => {
                this.toggleModal();
            };
        });


    }

    toggleModal(){
        this.setState({
            open: !this.state.open
        });
    }

    render() {

        return (
            <div className="" >
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Symbol</Table.HeaderCell>
                            {/*<Table.HeaderCell>Value</Table.HeaderCell>*/}
                            {/*<Table.HeaderCell>Percentage</Table.HeaderCell>*/}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.state.data.map((i) => {
                                //for(let i = 0 ; i < this.state.data.length; i++) {
                                return <CoinRow coinSymbol={i} key={i}>Test</CoinRow>
                                //}
                            })
                        }
                        <Table.Cell negative>
                            <Button positive onClick={this.toggleModal} content="Add to Watchlist"/>
                            <Modal size="mini" open={this.state.open} onClose={this.toggleModal}>
                                <Modal.Header>
                                    Add to Watchlist
                                </Modal.Header>
                                <Modal.Content>
                                    <p>Input a coin symbol to add to your watchlist</p>
                                    <Input id = "add"/>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button negative onClick={this.toggleModal}>
                                        Cancel
                                    </Button>
                                    <Button positive icon='checkmark' labelPosition='right' content='Add' onClick={this.addWatchlist}/>
                                </Modal.Actions>
                            </Modal>
                        </Table.Cell>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CoinTable;
