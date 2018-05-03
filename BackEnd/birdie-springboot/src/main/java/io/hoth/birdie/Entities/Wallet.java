package io.hoth.birdie.Entities;


import com.binance.api.client.domain.account.Trade;
import org.springframework.data.annotation.Id;

import java.util.List;

public class Wallet {
    @Id
    private String id;

    List<Trade> trades;
    int lastTradeID = 0;


    // TODO set up wallet
}
