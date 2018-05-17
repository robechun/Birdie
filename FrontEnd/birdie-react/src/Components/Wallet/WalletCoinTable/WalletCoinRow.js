import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'

class WalletCoinRow extends Component {
    render() {
        return (
            <Table.Row>
                <Table.Cell negative>{this.props.asset}</Table.Cell>
                <Table.Cell negative>{this.props.free}</Table.Cell>
                <Table.Cell negative>{this.props.locked}</Table.Cell>
            </Table.Row>
        )
    }
}

export default WalletCoinRow;
