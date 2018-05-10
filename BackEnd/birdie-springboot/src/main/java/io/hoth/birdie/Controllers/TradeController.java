package io.hoth.birdie.Controllers;

import com.binance.api.client.domain.account.NewOrderResponse;
import io.hoth.birdie.Services.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/trade")
public class TradeController {

    @Autowired
    TradeService tradeService;

    @PostMapping(value = "/market{type}/{symbol}&{amount}")
    public NewOrderResponse placeMarketOrder(@PathVariable(value = "type") String type,
                                             @PathVariable(value = "symbol") String symbol,
                                             @PathVariable(value = "amount") String amount) {

        if (type.equals("Buy"))
            return tradeService.marketBuy(symbol, amount);
        else if (type.equals("Sell"))
            return tradeService.marketSell(symbol, amount);
        else
            return new NewOrderResponse();

    }




    @PostMapping(value = "/limit{type}/{symbol}&{amount}&{price}")
    public NewOrderResponse placeLimitOrder(@PathVariable(value = "type") String type,
                                            @PathVariable(value = "symbol") String symbol,
                                            @PathVariable(value = "amount") String amount,
                                            @PathVariable(value = "price") String price) {

        if (type.equals("Buy"))
            return tradeService.limitBuy(symbol, amount, price);
        else if (type.equals("Sell"))
            return tradeService.limitSell(symbol, amount, price);
        else
            return new NewOrderResponse();

    }



    @PostMapping(value = "/both/{symbol}&{limitAmount}&{limitPrice}&{stopAmount}&{stopPrice}&{threshold}")
    public ResponseEntity placeBoth(@PathVariable(value = "symbol") String symbol,
                                      @PathVariable(value = "limitAmount") String limitAmount,
                                      @PathVariable(value = "limitPrice") String limitPrice,
                                      @PathVariable(value = "stopAmount") String stopAmount,
                                      @PathVariable(value = "stopPrice") String stopPrice,
                                      @PathVariable(value = "threshold") String threshold) {

        if (!tradeService.bothOrders(symbol, limitAmount, limitPrice, stopAmount, stopPrice, threshold))
            return new ResponseEntity(HttpStatus.BAD_REQUEST);


        // TODO: PERHAPS NOT THE RIGHT RESPONSE
        return new ResponseEntity(HttpStatus.OK);

        //wss://stream.binance.com:9443/ws/ethbtc@trade
    }



    // TODO: Cancel and Modify

//    @PostMapping(value = "/stopLoss/{symbol}&{amount}&{price}")
//    public NewOrderResponse placeStopLossOrder(@PathVariable(value = "symbol") String symbol,
//                                               @PathVariable(value = "amount") String amount,
//                                               @PathVariable(value = "price") String price) {
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
//        return client.newOrder(NewOrder.(symbol, TimeInForce.GTC, amount, price));
//
//    }

    //@PostMapping(value = "/stoplossLimit/{symbol}&{amount}&{price}&{stop")

}
