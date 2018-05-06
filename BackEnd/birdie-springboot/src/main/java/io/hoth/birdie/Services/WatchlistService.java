package io.hoth.birdie.Services;

import io.hoth.birdie.DAO.WatchlistRepository;
import io.hoth.birdie.Entities.Watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

public class WatchlistService {

    @Autowired
    private WatchlistRepository watchlistRepository;

    public Watchlist getWatchlist(String id){
        Watchlist watchlist = watchlistRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id: " + id)
        );
        return watchlist;
    }

    public boolean clearWatchlist(String id){
        try {
            Watchlist watchlist = getWatchlist(id);
            return watchlist.clearWatchlist();
        }
        catch (UsernameNotFoundException e){
            return false;
        }
    }

    public boolean deleteWatchlistElement(String id, String symbol){
        try {
            Watchlist watchlist = getWatchlist(id);
            return watchlist.deleteWatchlistElement(symbol);
        }
        catch (UsernameNotFoundException e){
            return false;
        }
    }

    public boolean addWatchlistElement(String id, String symbol){
        try {
            Watchlist watchlist = getWatchlist(id);
            return watchlist.addWatchlistElement(symbol);
        }
        catch(UsernameNotFoundException e){
            return false;
        }
    }
}
