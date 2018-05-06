package io.hoth.birdie.Controllers;

import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.account.NewOrder;
import com.binance.api.client.domain.account.NewOrderResponse;
import io.hoth.birdie.Entities.MarketOrderRequest;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/trade")
public class TradeController {

    @PostMapping(value = "/market/{symbol}&{amount}")
    public NewOrderResponse placeMarketOrder(@PathVariable(value = "symbol") String symbol,
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
        //client.newOrderTest(NewOrder.marketBuy(request.getSymbol(), request.getAmount()));
        return client.newOrder(NewOrder.marketBuy(symbol, amount));
    }
//
//    @PostMapping(value = "/limit")
//    public NewOrderResponse placeLimitOrder(@RequestBody MarketOrderRequest request) {
//        // Grab current user
//        UserPrincipal currentUser = (UserPrincipal)
//                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(
//                currentUser.getApiKey(),
//                currentUser.getSecret()
//        );
//        BinanceApiRestClient client = factory.newRestClient();
//
//
//
//        // TODO: return type(?)
//        //return client.newOrder(NewOrder.(request.getSymbol(), request.getAmount()));
//    }

}
