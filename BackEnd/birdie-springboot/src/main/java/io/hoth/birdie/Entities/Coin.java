package io.hoth.birdie.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Coins")
public class Coin {

    @Id
    private String id;

    private String name;
    private List<CoinEntry> coinEntries = new ArrayList<CoinEntry>();
    private int lastFetchedId;

    public Coin() {

    }
    public Coin(String name) {
        this.name = name;
    }

    public Coin(String name, int lastFetched) {
        this.name = name;
        this.lastFetchedId = lastFetched;
    }

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


    public int getLastFetchedId() {
        return lastFetchedId;
    }

    public void setLastFetchedId(int lastFetchedId) {
        this.lastFetchedId = lastFetchedId;
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
