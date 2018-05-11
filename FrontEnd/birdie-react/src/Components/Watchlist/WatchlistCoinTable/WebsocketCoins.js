// import React, { Component } from 'react'
// import Websocket from 'react-websocket';
//
//
// class WebsocketCoins extends Component {
//     constructor(){
//         super();
//         this.state = {
//             data : ""
//         }
//     }
//
//     handleData(data){
//         console.log("Hello");
//         let bestPrice = JSON.parse(data).a;
//         console.log("STATE DATA:" + this.state.data);
//         console.log("WEBSOCKET DATA: " + JSON.parse(data).a)
//         this.setState({
//             data: bestPrice
//         }, () => {
//             console.log("wsData: " + this.state.data)
//         });
//     }
//
//     opened(data){
//         console.log("websocket opened")
//         console.log(data);
//     }
//
//     render() {
//         return(
//             <div>
//                 <Websocket url={'wss://stream.binance.com:9443/ws/BTCETH@ticker'}
//                            onMessage={this.handleData.bind(this)}
//                            onOpen={this.opened}
//                 />
//             </div>
//         );
//     }
//
// }
// export default WebsocketCoins;
