package io.hoth.birdie.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@RedisHash("Coins")
public class Coin implements Serializable {
    @Id
    private String id;
    private String name;
    private List<CoinEntry> coinEntries = new ArrayList<CoinEntry>();


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CoinEntry> getCoinEntries() {
        return coinEntries;
    }

    public void setCoinEntries(List<CoinEntry> coinData) {
        this.coinEntries = coinData;
    }


}
