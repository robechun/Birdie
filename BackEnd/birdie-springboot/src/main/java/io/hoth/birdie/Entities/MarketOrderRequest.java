package io.hoth.birdie.Entities;

public class MarketOrderRequest {

    private String symbol;
    private String amount;

    public MarketOrderRequest() { }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }
}
