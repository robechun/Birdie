import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'

class CoinTable extends Component {
  render() {
    return (
        <div className="CoinTable" >
            <Table celled selectable>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Coin</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                    <Table.HeaderCell>Percentage</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell negative>BTC</Table.Cell>
                    <Table.Cell negative>BTCValue: $11</Table.Cell>
                    <Table.Cell negative> 
                    BTCPercentage: <Icon name='minus' /> 12%
                    </Table.Cell>
                </Table.Row>
                <Table.Row positive>
                    <Table.Cell>ETH</Table.Cell>
                    <Table.Cell>ETHValue: $10,000</Table.Cell>
                    <Table.Cell>
                    ETHPercentage: <Icon name='plus' /> 1000%
                    </Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
      </div>
    )
  }
}

export default CoinTable;
