import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import WalletCoinRow from './WalletCoinRow'

class WalletCoinTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            //data: this.props.coinlist
            data: []
        }
    }

    componentWillReceiveProps(){
        this.setState({
            data: this.props.data
        }, () => {
            console.log("WALLET COIN TABLE PROPS");
            console.log(this.props.data);
            this.render();
        });
    }

    render() {
        console.log("WALLET COIN TABLE STATE");
        console.log(this.props.data);
        return (
            <div className="CoinTable" >
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Asset/Symbol</Table.HeaderCell>
                            <Table.HeaderCell>Free</Table.HeaderCell>
                            <Table.HeaderCell>Locked</Table.HeaderCell>
                            {/*<Table.HeaderCell>Total</Table.HeaderCell>*/}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.props.data.map((i) => {
                                console.log('test');
                                //for(let i = 0 ; i < this.state.data.length; i++) {
                                return <WalletCoinRow asset={i.asset} free={i.free} locked={i.locked} key={i.asset}>Test</WalletCoinRow>
                                //}
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default WalletCoinTable;
