package io.hoth.birdie.Controllers;

import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.account.Account;
import com.binance.api.client.domain.account.AssetBalance;
import com.binance.api.client.domain.account.Order;
import com.binance.api.client.domain.account.Trade;
import com.binance.api.client.exception.BinanceApiException;
import io.hoth.birdie.Config.AvailableSymbols;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/wallet")
public class WalletController {


    @Autowired
    AvailableSymbols availableSymbols;

    @GetMapping(value = "/balance")
    public void getAccountBalance() {
        // Grab current user and use the API key and Secret to make new REST calls
        UserPrincipal currentUser = (UserPrincipal)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(
                currentUser.getApiKey(),
                currentUser.getSecret()
        );
        BinanceApiRestClient client = factory.newRestClient();


        // Grab the Binance account associated
        try {
            Account account = client.getAccount(6000000L, System.currentTimeMillis());

            // ---------------------
            // account.getBalances()
            // --> returns list of AssetBalances
            // --> AssetBalance has: String asset, String free, and String locked

        } catch (BinanceApiException e) {
            System.out.println(e.getError().getCode());
            System.out.println(e.getError().getMsg());
        }


        // TODO: How to send it to front-end to parse?

    }

    // TODO: takes too long, and still have to do calculations of profit/loss somehow
    @GetMapping(value = "/alltrades")
    public void getAllTrades() {
        // Grab current user and use the API key and Secret to make new REST calls
        UserPrincipal currentUser = (UserPrincipal)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(
                currentUser.getApiKey(),
                currentUser.getSecret()
        );
        BinanceApiRestClient client = factory.newRestClient();


        List<List<Trade>> allTrades  = new ArrayList<>();
        // Grab the Binance account associated
        for (String[] group : availableSymbols.getAllSymbols())
        {
            for (String symbol : group)
            {
                /*
                 * @param symbol symbol to get trades from
                 * @param limit default 500; max 500
                 * @param fromId TradeId to fetch from. Default gets most recent trades.
                 * @param recvWindow
                 * @param timeStamp
                 * @return a list of trades
                 */
                try {
                    List<Trade> trades = client.getMyTrades(symbol, 500, 0L, 6000000L, System.currentTimeMillis());
                    if (trades.size() > 0)
                        allTrades.add(trades);
                } catch (BinanceApiException e) {
                    System.out.println(e.getError().getCode());
                    System.out.println(e.getError().getMsg());
                    System.out.println(symbol);
                }
            }
        }


        System.out.println(allTrades);



    }




}
