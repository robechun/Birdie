package io.hoth.birdie.Controllers;

import io.hoth.birdie.Entities.Watchlist;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;

@RestController
public class WatchlistController {

    //Call an instance of service

    @GetMapping("/watchlist")
    public LinkedList<String> getWatchlist(Watchlist watchlist){
        return watchlist.getWatchlist();
    }

    @PostMapping("/watchlist/add")
    public boolean addWatchlistElement(){
        //stub
        return false;
    }

    @PostMapping("/watchlist/delete")
    public boolean deleteWatchlistElement(){
        //stub
        return false;
    }

    @DeleteMapping("/watchlist/clear")
    public boolean clearWatchlist(){
        //stub
        return false;
    }


}
