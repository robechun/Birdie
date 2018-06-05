import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import MarketTrade from "./MarketTrade/MarketTrade";
import LimitTrade from "./LimitTrade/LimitTrade";
import StopLoss from "./StopLossTrade/StopLoss";
import StopLossLimit from "./StopLossLimitTrade/StopLossLimit";
import CancelAll from "./CancelAllTrade/CancelAll";
import OpenOrders from "./OpenOrdersTrade/OpenOrders"

class Tradeview extends Component {
    constructor(){
        super();
        this.state = {
            activeItem : "Market",
            activeComp : <MarketTrade/>
        }

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (e, { name }) => {
        let comp = <div/>
        if(name === "Market"){
            comp = <MarketTrade/>
        }
        else if (name === "Limit"){
            comp = <LimitTrade/>
        }
        else if (name === "StopLoss"){
            comp = <StopLoss/>
        }
        else if (name === "StopLossLimit"){
            comp = <StopLossLimit/>
        }
        else if (name === "Cancel All"){
            comp = <CancelAll/>
        }
        else if (name === "Open Orders"){
            comp = <OpenOrders/>
        }

        this.setState({
            activeItem : name,
            activeComp : comp
        });
    }

    render() {

        let activeItem = this.state.activeItem;

        return (
            <div className="full">
                <br/>
                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                        <Menu.Item name='Market' active={activeItem === 'Market'} onClick={this.handleItemClick} />
                        <Menu.Item name='Limit' active={activeItem === 'Limit'} onClick={this.handleItemClick} />
                        <Menu.Item name='StopLoss' active={activeItem === 'StopLoss'} onClick={this.handleItemClick} />
                        <Menu.Item name='StopLossLimit' active={activeItem === 'StopLossLimit'} onClick={this.handleItemClick} />
                        <Menu.Item name='Cancel All' active={activeItem === 'Cancel All'} onClick={this.handleItemClick} />
                        <Menu.Item name='Open Orders' active={activeItem === 'Open Orders'} onClick={this.handleItemClick} />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={12}>
                        {this.state.activeComp}
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}

export default Tradeview;