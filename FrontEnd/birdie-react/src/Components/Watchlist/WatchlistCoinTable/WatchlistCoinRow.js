import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import Websocket from 'react-websocket';

class WatchlistCoinRow extends Component {

    constructor(){
        super();
        this.state = {
            value : "",
            priceChange : "",
            flag : ""
        }
        this.handleData = this.handleData.bind(this);
    }

    componentWillMount(){
        console.log("comp Mounted");
    }

    handleData(data){
        let bestPrice = JSON.parse(data).a;
        let priceChange24hr = JSON.parse(data).P;
        let changeflag;
        if(priceChange24hr < 0){
            changeflag = "negative"
        }
        else{
            changeflag = "positive"
        }
        this.setState({
            value: bestPrice,
            priceChange: priceChange24hr,
            flag : changeflag
        });
    }

    render() {
        return (
            <Table.Row className = {this.state.flag}>
                <Table.Cell className = {this.state.flag}>{this.props.coinSymbol}</Table.Cell>
                <Table.Cell >{this.state.value}</Table.Cell>
                <Table.Cell >{this.state.priceChange}</Table.Cell>
                <Websocket url={'wss://stream.binance.com:9443/ws/'+ this.props.coinSymbol.toLowerCase() + '@ticker'}
                           onMessage={this.handleData.bind(this)}
                />
                {/*<Table.Cell negative>*/}
                    {/*BTCPercentage: <Icon name='minus' /> 12%*/}
                {/*</Table.Cell>*/}

            </Table.Row>

        )
    }
}

export default WatchlistCoinRow;
