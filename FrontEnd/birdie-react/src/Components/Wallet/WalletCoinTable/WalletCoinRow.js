import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'

class WalletCoinRow extends Component {
    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.props.asset}</Table.Cell>
                <Table.Cell>{this.props.free}</Table.Cell>
                <Table.Cell>{this.props.locked}</Table.Cell>
                <Table.Cell>{this.props.total}</Table.Cell>
            </Table.Row>
        )
    }
}

export default WalletCoinRow;
