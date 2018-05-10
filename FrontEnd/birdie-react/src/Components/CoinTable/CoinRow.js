import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'

class CoinTable extends Component {
    render() {
        return (
            <Table.Row>
                <Table.Cell negative>{this.props.coinSymbol}</Table.Cell>
                {/*<Table.Cell negative></Table.Cell>*/}
                {/*<Table.Cell negative>*/}
                    {/*BTCPercentage: <Icon name='minus' /> 12%*/}
                {/*</Table.Cell>*/}

            </Table.Row>
        )
    }
}

export default CoinTable;
