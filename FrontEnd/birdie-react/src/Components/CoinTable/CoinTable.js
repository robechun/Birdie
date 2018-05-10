import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import CoinRow from './CoinRow'

class CoinTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            //data: this.props.coinlist
            data: this.props.coinlist
        }
    }
  render() {

    return (
        <div className="" >
            <Table celled selectable>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Symbol</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                    <Table.HeaderCell>Percentage</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.state.data.map((i) => {
                            console.log('test');
                        //for(let i = 0 ; i < this.state.data.length; i++) {
                            return <CoinRow coinSymbol={i} key={i}>Test</CoinRow>
                        //}
                        })
                    }
                </Table.Body>
            </Table>
      </div>
    )
  }
}

export default CoinTable;
