package io.hoth.birdie.Controllers;

import io.hoth.birdie.Entities.Watchlist;
import io.hoth.birdie.Services.WatchlistService;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController
public class WatchlistController {

    //Call an instance of service
    WatchlistService watchlistService;

    //Gets Watchlist based on ID provided
    @GetMapping("/watchlist/{id}")
    public List<String> getWatchlist(@PathVariable String id){
        return this.watchlistService.getWatchlist(id).getWatchlist();
    }

    //Adds to watchlist
    @PostMapping("/watchlist/add/{id}/{symbol}")
    public boolean addWatchlistElement(@PathVariable String id, @PathVariable String symbol){
        return this.watchlistService.addWatchlistElement(id, symbol);
    }

    //Deletes from the watchlist
    @DeleteMapping("/watchlist/delete/{id}/{symbol}")
    public boolean deleteWatchlistElement(@PathVariable String id, @PathVariable String symbol){
        return this.watchlistService.deleteWatchlistElement(id, symbol);
    }

    //Clears out the watchlist
    @DeleteMapping("/watchlist/clear/{id}")
    public boolean clearWatchlist(@PathVariable String id){
        return this.watchlistService.clearWatchlist(id);
    }
}
