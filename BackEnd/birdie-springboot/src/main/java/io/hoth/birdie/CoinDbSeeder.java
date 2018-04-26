//package io.hoth.birdie;
//
//import io.hoth.birdie.DAO.CoinRepository;
//import io.hoth.birdie.Entities.Coin;
//import io.hoth.birdie.Entities.CoinEntry;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.core.ParameterizedTypeReference;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.http.*;
//import org.springframework.stereotype.Component;
//import org.springframework.web.client.RestTemplate;
//
//import java.util.HashSet;
//import java.util.List;
//import java.util.Set;
//
//// Temporary class (can be enabled/disabled) to get historical coin data.
//@Component
//public class CoinDbSeeder implements CommandLineRunner {
//    private RestTemplate restTemplate = new RestTemplate();
//    private String coinResourceUrl = "https://www.binance.com/api/v1/historicalTrades?symbol=";
//    private HttpHeaders headers = new HttpHeaders();
//    private Set<String> symbols = new HashSet<String>();
//
//    @Autowired
//    private CoinRepository coinRepository;
//
//
//    @Override
//    public void run(String... args) throws Exception {
//
//        // Header for authentication to use API
//        headers.add("X-MBX-APIKEY", "3P2pRnS2VlssnUb9EPXmqGexatYIgus2ZKPY580DH15ekQRXeIg6PW6H1IbQwZZu");
//        initializeSymbols();
//        HttpEntity<?> entity = new HttpEntity<Object>(headers);
//
//
//
//        // For each symbol, grab historical data from the time of last fetch --
//        // (fromID) is the variable that will get from ID of the given coin symbol.
//        // Persist to the database (MONGO) once you grab the REST data.
//        for (String symbol : symbols) {
//
//            // Grab coin data from database and prepare for updates
//            Coin coin = getFromID(symbol);
//            int fromID = coin.getLastFetchedId() + 1;
//
//            ResponseEntity<List<CoinEntry>> coinResponse = new ResponseEntity<>(HttpStatus.ACCEPTED);
//
//            // TODO: check for other errors/responses
//
//            // Keep getting data from the REST service until errors out or is empty.
//            // TODO: NEED TO SYNC WITH WEBSOCKET TOO
//            int i = 0; //TODO erase by production/actual
//            while ((coinResponse.getStatusCodeValue() == 200 && coinResponse.hasBody())
//                    || coinResponse.getStatusCodeValue() == 202) {
//
//                // ********** REST GET REQUEST ************ //
//                coinResponse = restTemplate.exchange(coinResourceUrl + symbol + "&fromId=" + String.valueOf(fromID),
//                        HttpMethod.GET,
//                        entity,
//                        new ParameterizedTypeReference<List<CoinEntry>>() {
//                        });
//                // ********** END OF REST GET REQUEST ************ //
//
//
//                // Get the entries from the JSON response and add to database.
//                List<CoinEntry> entries = coinResponse.getBody();
//                coinRepository.updateCoinEntries(symbol, entries);
//
//
//                fromID += 500; // TODO: WONT ALWAYS BE +500 (AT THE END)
//                coin.setLastFetchedId(fromID);
//
//                i++;
//                if (i == 2) {
//                    break;
//                }
//            }
//
//            //System.out.println(coin.getCoinEntries());
//            //coinRepository.save(coin);
//        }
//
//
//    }
//
//    private Coin getFromID(String symbol) {
//
//        // Try to fetch from database; if doesnt exist, return a new coin
//        Coin c = coinRepository.findByName(symbol);
//
//        if (c == null) {
//            Coin newC = new Coin(symbol, -1);
//            coinRepository.save(newC);
//            return newC;
//        }
//
//        return c;
//    }
//
//
//    private void initializeSymbols() {
//        symbols.add("ETHBTC");
//        symbols.add("XRPBTC");
//
//        // TODO ADD ALL THE symbols
//    }
//
//
//
//
//}
//
