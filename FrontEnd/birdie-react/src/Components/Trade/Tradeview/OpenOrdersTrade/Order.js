import React, { Component } from 'react';

class Order extends Component {
    constructor(props){
        super(props);
        this.state= {
            responseHTML : this.props.responseHTML
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.responseHTML.map((s) => {
                        return(
                            <div>
                                <hr/>
                                {s.clientOrderId}
                                {s.executedQty}
                                {s.icebergQty}
                                {s.orderId}
                                {s.origQty}
                                {s.price}
                                {s.side}
                                {s.status}
                                {s.stopPrice}
                                {s.symbol}
                                {s.time}
                            </div>
                        )
                    })

                }
                {/*{this.state.responseHTML[0].clientOrderId}*/}
                {/*{this.state.responseHTML[0].executedQty}*/}
                {/*{this.state.responseHTML[0].icebergQty}*/}
                {/*{this.state.responseHTML[0].orderId}*/}
                {/*{this.state.responseHTML[0].origQty}*/}
                {/*{this.state.responseHTML[0].price}*/}
                {/*{this.state.responseHTML[0].side}*/}
                {/*{this.state.responseHTML[0].status}*/}
                {/*{this.state.responseHTML[0].stopPrice}*/}
                {/*{this.state.responseHTML[0].symbol}*/}
                {/*{this.state.responseHTML[0].time}*/}
            </div>
        );
    }
}

export default Order;
