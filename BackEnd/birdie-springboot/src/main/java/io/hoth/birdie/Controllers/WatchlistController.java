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
    @GetMapping("/watchlist/{id}")
    public List<String> getWatchlist(@PathVariable String id){
        return watchlistService.getWatchlist(id).getWatchlist();
    }

    //Adds to watchlist
    //TODO: Potentially add checks to ensure that the symbol is a valid symbol
    @PostMapping("/watchlist/add/{id}/{symbol}")
    public List<String> addWatchlistElement(@PathVariable String id, @PathVariable String symbol){
        if(watchlistService.addWatchlistElement(id, symbol))
            return watchlistService.getWatchlist(id).getWatchlist();
        else
            return null; //list already contains symbol
    }

    //Deletes from the watchlist
    @DeleteMapping("/watchlist/delete/{id}/{symbol}")
    public List<String> deleteWatchlistElement(@PathVariable String id, @PathVariable String symbol){
        if(watchlistService.deleteWatchlistElement(id, symbol))
            return watchlistService.getWatchlist(id).getWatchlist();
        else
            return null; //list did not contain symbol
    }

    //Clears out the watchlist
    @DeleteMapping("/watchlist/clear/{id}")
    public List<String> clearWatchlist(@PathVariable String id){
        if(watchlistService.clearWatchlist(id)){
            return watchlistService.getWatchlist(id).getWatchlist();
        }
        else
            return null; //if list is empty...never hit though despite list being empty
    }
}
