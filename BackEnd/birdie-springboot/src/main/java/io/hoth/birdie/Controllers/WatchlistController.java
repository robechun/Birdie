package io.hoth.birdie.Controllers;


import io.hoth.birdie.DAO.WatchlistRepository;
import io.hoth.birdie.Entities.Watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;

@RestController
public class WatchlistController {

    //Call an instance of service

    @GetMapping("/watchlist")
    public LinkedList<String> getWatchlist(Watchlist watchlist){
        return watchlist.getWatchlist();
    }



}
