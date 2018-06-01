import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import WalletCoinRow from './WalletCoinRow'

class WalletCoinTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className="WalletCoinTable">
                <Table inverted size='small' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Asset/Symbol</Table.HeaderCell>
                            <Table.HeaderCell>Free</Table.HeaderCell>
                            <Table.HeaderCell>Locked</Table.HeaderCell>
                            <Table.HeaderCell>Total</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.props.data.map((i) => {
                                let total = parseFloat(i.free) + parseFloat(i.locked);
                                return <WalletCoinRow asset={i.asset} free={i.free} locked={i.locked} key={i.asset} total = {total.toPrecision(8)}>Test</WalletCoinRow>
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default WalletCoinTable;
