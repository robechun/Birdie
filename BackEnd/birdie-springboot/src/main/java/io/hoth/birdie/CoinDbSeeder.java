package io.hoth.birdie;

import io.hoth.birdie.DAO.CoinRepository;
import io.hoth.birdie.Entities.Coin;
import io.hoth.birdie.Entities.CoinEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

// Temporary class (can be enabled/disabled) to get historical coin data.
@Component
public class CoinDbSeeder implements CommandLineRunner {
    private RestTemplate restTemplate = new RestTemplate();
    private String coinResourceUrl = "https://www.binance.com/api/v1/historicalTrades?symbol=";
    private HttpHeaders headers = new HttpHeaders();
    private Set<String> symbols = new HashSet<String>();

    @Autowired
    private CoinRepository coinRepository;


    @Override
    public void run(String... args) throws Exception {

        // Header for authentication to use API
        headers.add("X-MBX-APIKEY", "3P2pRnS2VlssnUb9EPXmqGexatYIgus2ZKPY580DH15ekQRXeIg6PW6H1IbQwZZu");
        initializeSymbols();
        HttpEntity<?> entity = new HttpEntity<Object>(headers);



        // Grab REST Data and add it to the Redis database.
        for (String symbol : symbols) {
            int from = 0;               // from what ID to get from -- will iterate through all

            ResponseEntity<List<CoinEntry>> coinResponse = new ResponseEntity<>(HttpStatus.ACCEPTED);
            Coin coin = new Coin();
            coin.setName(symbol);

            // TODO: Start from what doesn't exist in the database (id wise)
            // TODO: check for other errors/responses
            // TODO: sync with websocket(?)

            int i = 0;
            while ((coinResponse.getStatusCodeValue() == 200 && coinResponse.hasBody())
                    || coinResponse.getStatusCodeValue() == 202) {
                coinResponse = restTemplate.exchange(coinResourceUrl + symbol + "&fromId=" + String.valueOf(from),
                        HttpMethod.GET,
                        entity,
                        new ParameterizedTypeReference<List<CoinEntry>>() {
                        });
                List<CoinEntry> entries = coinResponse.getBody();
                coin.getCoinEntries().addAll(entries);

                from += 500;
                i++;
                if (i == 2) {
                    break;
                }
            }

            System.out.println(coin.getCoinEntries());
            coinRepository.save(coin);
        }



//
//        while (result.hasBody()) {
//            CoinEntry entry = restTemplate.getForObject(coinResourceUrl+"&fromId="+String.valueOf(from), CoinEntry.class);
//            coin.getCoinEntries().add(entry);
//            //result = restTemplate.exchange(coinResourceUrl+"&fromId="+String.valueOf(from), HttpMethod.GET, entity, String.class);
//
//            from += 500;
//
//            System.out.println(result);
//            System.out.println("NEXT\n");
//
//        }

    }


    private void initializeSymbols() {
        symbols.add("ETHBTC");
        symbols.add("XRPBTC");

        // TODO ADD ALL THE symbols
    }




}

