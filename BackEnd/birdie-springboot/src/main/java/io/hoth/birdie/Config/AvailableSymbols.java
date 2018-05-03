package io.hoth.birdie.Config;

 import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class AvailableSymbols {

    private String symbols[] = new String[] {
            "BTC", "LTC", "ETH", "BNC", "ICO", "NEO", "QTUM", "EOS", "SNT",
            "BNT", "GAS", "BCC", "BTM", "USDT", "HCC", "HSR", "OAX", "DNT", "MCO", "ICN", "ELC", "PAY", "ZRX", "OMG",
            "WTC", "LRX", "YOYO", "LRC", "LLT", "TRX", "FID", "SNGLS", "STRAT", "BQX", "FUN", "KNC", "CDT", "XVG",
            "IOTA", "SNM", "LINK", "CVC", "TNT", "REP", "CTR", "MDA", "MTL", "SALT", "NULS", "SUB", "STX", "MTH", "CAT",
            "ADX", "PIX", "ETC", "ENG", "ZEC", "AST", "QLC", "1ST", "GNT", "DGD", "BAT", "DASH", "POWR", "BTG", "REQ",
            "XMR", "EVX", "VIB", "ENJ", "VEN", "CAG", "EDG", "ARK", "XRP", "MOD", "AVT", "STORJ", "KMD", "RCN", "EDO",
            "QASH", "SAN", "DATA", "DLT", "GUP", "MCAP", "MANA", "PPT", "OTN", "CFD", "RDN", "GXS", "AMB", "ARN",
            "BCPT", "CND", "GVT", "POE", "ALIS", "BTS", "FUEL", "XZC", "QSP", "LSK", "BCD", "TNB", "GRX", "STAR", "ADA",
            "LEND", "IFT", "KICK", "UKG", "VOISE", "XLM", "CMT", "WAVES", "WABI", "SBTC", "BCX", "GTO", "ETF", "ICX",
            "OST", "ELF", "AION", "WINGS", "BRD", "NEBL", "NAV", "VIBE", "LUN", "TRIG", "APPC", "CHAT", "RLC", "INS",
            "PIVX", "IOST", "STEEM", "NANO", "AE", "VIA", "BLZ", "SYS", "RPX", "NCASH", "POA", "ONT", "ZIL", "STORM",
            "XEM", "WAN", "WPR" };

    private String MajorSymbols[] = new String[] { "BTC", "ETH", "BNB", "USDT" };

    public String[] getMajorSymbols() {
        return MajorSymbols;
    }

    public String[] getSymbols() {
        return symbols;
    }
}
