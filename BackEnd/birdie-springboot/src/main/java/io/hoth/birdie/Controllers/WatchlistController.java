package io.hoth.birdie.Controllers;

import io.hoth.birdie.Entities.Watchlist;
import io.hoth.birdie.Services.WatchlistService;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController
public class WatchlistController {

    //Call an instance of service
    @Autowired
    WatchlistService watchlistService;

    //Gets Watchlist based on ID provided
    @GetMapping("/watchlist")
    public List<String> getWatchlist(){
        return watchlistService.getWatchlist();
    }

    //Adds to watchlist
    //TODO: Potentially add checks to ensure that the symbol is a valid symbol
    @PostMapping("/watchlist/add/{symbol}")
    public List<String> addWatchlistElement(@PathVariable String symbol){
        if(watchlistService.addWatchlistElement(symbol))
            return watchlistService.getWatchlist();
        else
            return null; //list already contains symbol
    }

    //Deletes from the watchlist
    @DeleteMapping("/watchlist/delete/{symbol}")
    public List<String> deleteWatchlistElement(@PathVariable String symbol){
        if(watchlistService.deleteWatchlistElement(symbol))
            return watchlistService.getWatchlist();
        else
            return null; //list did not contain symbol
    }

    //Clears out the watchlist
    @DeleteMapping("/watchlist/clear")
    public List<String> clearWatchlist(){
        if(watchlistService.clearWatchlist()){
            return watchlistService.getWatchlist();
        }
        else
            return null; //if list is empty...never hit though despite list being empty
    }
}
