package io.hoth.birdie.Services;

import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.account.Account;
import com.binance.api.client.exception.BinanceApiException;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class WalletService {

    // GET CURRENT USER
    private UserPrincipal getCurrentUser() {
        return (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }


    public ResponseEntity getBalances() {
        UserPrincipal currentUser = getCurrentUser();

        BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(
                currentUser.getApiKey(),
                currentUser.getSecret()
        );
        BinanceApiRestClient client = factory.newRestClient();

        System.out.printf("Current User for getting balances: %s\n", currentUser.getUsername());

        // Grab the Binance account associated
        try {
            Account account = client.getAccount(6000000L, System.currentTimeMillis());

            // ---------------------
            // account.getBalances()
            // --> returns list of AssetBalances
            // --> AssetBalance has: String asset, String free, and String locked
            return new ResponseEntity(account.getBalances(), HttpStatus.OK);

        } catch (BinanceApiException e) {
            System.out.println(e.getError().getCode());
            System.out.println(e.getError().getMsg());
        }


        // TODO: How to send it to front-end to parse?
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

}
