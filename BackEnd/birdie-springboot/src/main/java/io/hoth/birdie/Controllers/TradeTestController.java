package io.hoth.birdie.Controllers;

import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.TimeInForce;
import com.binance.api.client.domain.account.NewOrder;
import com.binance.api.client.domain.account.NewOrderResponse;
import io.hoth.birdie.Entities.MarketOrderRequest;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import static com.binance.api.client.domain.account.NewOrder.limitBuy;

@RestController
@RequestMapping(value = "/tradeTest")
public class TradeTestController {


    @PostMapping(value = "/market/{symbol}&{amount}")
    public void placeMarketOrder(@PathVariable(value = "symbol") String symbol,
                                 @PathVariable(value = "amount") String amount) {
        // Grab current user
        UserPrincipal currentUser = (UserPrincipal)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(
                currentUser.getApiKey(),
                currentUser.getSecret()
        );
        BinanceApiRestClient client = factory.newRestClient();

        // TODO: return type(?)
        client.newOrderTest(NewOrder.marketBuy(symbol, amount));
        //return client.newOrder(NewOrder.marketBuy(symbol, amount));
    }


    @PostMapping(value = "/limit/{symbol}&{amount}&{price}")
    public void placeLimitOrder(@PathVariable(value = "symbol") String symbol,
                                            @PathVariable(value = "amount") String amount,
                                            @PathVariable(value = "price") String price) {
        // Grab current user
        UserPrincipal currentUser = (UserPrincipal)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(
                currentUser.getApiKey(),
                currentUser.getSecret()
        );
        BinanceApiRestClient client = factory.newRestClient();



        // TODO: return type(?)
        client.newOrderTest(limitBuy(symbol, TimeInForce.GTC, amount, price));

    }

}
