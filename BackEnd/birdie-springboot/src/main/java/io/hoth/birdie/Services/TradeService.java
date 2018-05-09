package io.hoth.birdie.Services;

import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.TimeInForce;
import com.binance.api.client.domain.account.NewOrder;
import com.binance.api.client.domain.account.NewOrderResponse;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class TradeService {


    // Returns the Binance account
    private BinanceApiRestClient getCurrentClient() {
        // Grab current user
        UserPrincipal currentUser = (UserPrincipal)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(
                currentUser.getApiKey(),
                currentUser.getSecret()
        );

        return factory.newRestClient();
    }

    // MARKET BUY
    public NewOrderResponse marketBuy(String symbol, String amount) {
        BinanceApiRestClient client = getCurrentClient();

        return client.newOrder(NewOrder.marketBuy(symbol, amount));
    }

    // MARKET SELL
    public NewOrderResponse marketSell(String symbol, String amount) {
        BinanceApiRestClient client = getCurrentClient();

        return client.newOrder(NewOrder.marketSell(symbol, amount));

    }

    // LIMIT BUY
    public NewOrderResponse limitBuy(String symbol, String amount, String price) {
        BinanceApiRestClient client = getCurrentClient();

        return client.newOrder(NewOrder.limitBuy(symbol, TimeInForce.GTC, amount, price));
    }

    // LIMIT SELL
    public NewOrderResponse limitSell(String symbol, String amount, String price) {
        BinanceApiRestClient client = getCurrentClient();

        return client.newOrder(NewOrder.limitSell(symbol, TimeInForce.GTC, amount, price));
    }

}
