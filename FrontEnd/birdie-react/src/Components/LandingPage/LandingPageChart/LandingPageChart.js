import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class LandingPageChart extends Component {
    render() {
        return (
            <div classname = "center">
				<TradingViewWidget
					symbol="BINANCE:BTCUSDT"
					theme={Themes.DARK}
					locale="en"
					timezone="America/Vancouver"
					width="680"
					height="410"
					watchlist= {
						"BINANCE:BTCUSDT",
						"BINANCE:ETHBTC",
						"BINANCE:LTCBTC"
					}
				/>
            </div>
        );
    }
}

export default LandingPageChart;
