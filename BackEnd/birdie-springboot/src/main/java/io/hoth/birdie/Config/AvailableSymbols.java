package io.hoth.birdie.Config;

 import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class AvailableSymbols {

    private String BTCSymbols[] = new String[] {
            "ETHBTC", "EOSBTC", "BCCBTC", "TRXBTC", "LTCBTC", "ETCBTC", "XRPBTC", "ONTBTC", "ZILBTC", "NEOBTC",
            "BNBBTC", "ADABTC", "IOTABTC", "NANOBTC", "XVGBTC", "IOSTBTC", "ICXBTC", "CLOAKBTC", "ELFBTC", "VENBTC",
            "NCASHBTC", "CMTBTC", "LOOMBTC", "BCDBTC", "WANBTC", "BTGBTC", "QTUMBTC", "DGDBTC", "ZRXBTC", "MTLBTC",
            "SNTBTC", "SUBBTC", "XMRBTC", "NULSBTC", "ENJBTC", "WAVESBTC", "GVTBTC", "STRATBTC", "EDOBTC", "LINKBTC",
            "NEBLBTC", "QLCBTC", "STORMBTC", "OMGBTC", "TRIGBTC", "SALTBTC", "XLMBTC", "BQXBTC", "PPTBTC", "AEBTC",
            "RCNBTC", "WPRBTC", "TNBBTC", "ENGBTC", "POWRBTC", "ARNBTC", "CHATBTC", "GTOBTC", "LSKBTC", "BCPTBTC",
            "DASHBTC", "AIONBTC", "POABTC", "AMBBTC", "BTSBTC", "FUNBTC", "QSPBTC", "XEMBTC", "VIBBTC", "BATBTC",
            "EVXBTC", "WTCBTC", "HSRBTC", "POEBTC", "GASBTC", "WINGSBTC", "LRCBTC", "ZECBTC", "MCOBTC", "RPXBTC",
            "LUNBTC", "GNTBTC", "CNDBTC", "INSBTC", "LENDBTC", "APPCBTC", "FUELBTC", "XZCBTC", "BLZBTC", "KMDBTC",
            "MDABTC", "ASTBTC", "YOYOBTC", "MANABTC", "CDTBTC", "STEEMBTC", "TNTBTC", "VIBEBTC", "DNTBTC", "KNCBTC",
            "REQBTC", "WABIBTC", "SNGLSBTC", "OSTBTC", "BNTBTC", "SYSBTC", "DLTBTC", "GXSBTC", "ARKBTC", "PIVXBTC",
            "RDNBTC", "MTHBTC", "OAXBTC", "ADXBTC", "MODBTC", "GRSBTC", "BRDBTC", "VIABTC", "ICNBTC", "NAVBTC",
            "SNMBTC", "STORJBTC", "RLCBTC"
    };

    private String ETHSymbols[] = new String[] {
            "EOSETH", "TRXETH", "BCCETH", "ZILETH", "ONTETH", "ADAETH", "CMTETH", "XRPETH", "LOOMETH", "ETCETH",
            "LTCETH", "VENETH", "WANETH", "NEOETH", "QTUMETH", "BNBETH", "IOTAETH", "ICXETH", "XVGETH", "ZRXETH",
            "NANOETH", "DGDETH", "XLMETH", "IOSTETH", "POAETH", "AEETH", "NCASHETH", "CLOAKETH", "ELFETH", "BCDETH",
            "AIONETH", "PPTETH", "XMRETH", "WPRETH", "OMGETH", "BATETH", "LRCETH", "BTGETH", "SALTETH", "BLZETH",
            "SNTETH", "TNBETH", "FUNETH", "GTOETH", "AMBETH", "CDTETH", "WTCETH", "BTSETH", "CHATETH", "LENDETH",
            "DASHETH", "QSPETH", "BNTETH", "ENJETH", "STORMETH", "POEETH", "KNCETH", "RCNETH", "XEMETH", "SUBETH",
            "APPCETH", "BQXETH", "QLCETH", "LINKETH", "YOYOETH", "REQETH", "LSKETH", "CNDETH", "STRATETH", "MANAETH",
            "GNTETH", "FUELETH", "WABIETH", "ZECETH", "POWRETH", "MCOETH", "RDNETH", "ENGETH", "HSRETH", "EVXETH",
            "RPXETH", "GVTETH", "ARNETH", "GXSETH", "NULSETH", "WINGSETH", "TRIGETH", "LUNETH", "NEBLETH", "XZCETH",
            "DNTETH", "ASTETH", "KMDETH", "INSETH", "TNTETH", "OSTETH", "WAVESETH", "SNGLSETH", "VIBEETH", "BRDETH",
            "STEEMETH", "MODETH", "MDAETH", "ADXETH", "SYSETH", "PIVXETH", "ICNETH", "MTHETH", "ARKETH", "BCPTETH",
            "DLTETH", "VIBETH", "MTLETH", "NAVETH", "RLCETH", "GRSETH", "OAXETH", "SNMETH", "EDOETH", "STORJETH",
            "VIAETH"

    };

    private String USDTSymbols[] = new String[] {
            "BTCUSDT", "ETHUSDT", "BCCUSDT", "LTCUSDT", "BNBUSDT", "NEOUSDT", "ADAUSDT", "XRPUSDT", "QTUMUSDT"

    };

    private String BNBSymbols[] = new String[] {
            "BCCBNB", "ONTBNB", "ADABNB", "LTCBNB", "ZILBNB", "NEOBNB", "NANOBNB", "LOOMBNB", "IOTABNB", "ICXBNB",
            "CMTBNB", "VENBNB", "WANBNB", "NCASHBNB", "GTOBNB", "XLMBNB", "AEBNB", "XEMBNB", "WTCBNB", "QSPBNB",
            "AMBBNB", "LSKBNB", "POABNB", "STORMBNB", "BATBNB", "TRIGBNB", "YOYOBNB", "QTUMBNB", "CNDBNB", "MCOBNB",
            "BLZBNB", "APPCBNB", "AIONBNB", "QLCBNB", "WABIBNB", "NEBLBNB", "BRDBNB", "STEEMBNB", "XZCBNB", "GNTBNB",
            "RCNBNB", "RPXBNB", "WAVESBNB", "POWRBNB", "NULSBNB", "BTSBNB", "VIABNB", "BCPTBNB", "OSTBNB", "DLTBNB",
            "RDNBNB", "SYSBNB", "PIVXBNB", "ADXBNB", "NAVBNB", "RLCBNB",

    };

    private String AllSymbols[][] = { BNBSymbols, BTCSymbols, ETHSymbols, USDTSymbols };

    public String[] getBTCSymbols() {
        return BTCSymbols;
    }

    public void setBTCSymbols(String[] BTCSymbols) {
        this.BTCSymbols = BTCSymbols;
    }

    public String[] getETHSymbols() {
        return ETHSymbols;
    }

    public void setETHSymbols(String[] ETHSymbols) {
        this.ETHSymbols = ETHSymbols;
    }

    public String[] getUSDTSymbols() {
        return USDTSymbols;
    }

    public void setUSDTSymbols(String[] USDTSymbols) {
        this.USDTSymbols = USDTSymbols;
    }

    public String[] getBNBSymbols() {
        return BNBSymbols;
    }

    public void setBNBSymbols(String[] BNBSymbols) {
        this.BNBSymbols = BNBSymbols;
    }

    public String[][] getAllSymbols() {
        return AllSymbols;
    }

    public void setAllSymbols(String[][] allSymbols) {
        AllSymbols = allSymbols;
    }
}
