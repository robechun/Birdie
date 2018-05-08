package io.hoth.birdie.Services;

import io.hoth.birdie.DAO.WatchlistRepository;
import io.hoth.birdie.Entities.Watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WatchlistService {

    @Autowired
    private WatchlistRepository watchlistRepository;

    public Watchlist getWatchlist(String id){
        return watchlistRepository.findById(id)
                    .orElseThrow(
                            () -> new UsernameNotFoundException("No watchlist found with id: " + id)
                            //() -> new NullPointerException("Watchlist is empty with id: " + id)
                    );
        //return watchlist;
    }

    public boolean clearWatchlist(String id){
        Watchlist watchlist = watchlistRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("No watchlist found with id: " + id)
        );
        if(watchlist.clearWatchlist()) {
            watchlistRepository.save(watchlist);
            return true;
        }
        else
            return false; //if list is already empty

    }

    public boolean deleteWatchlistElement(String id, String symbol){
        Watchlist watchlist = watchlistRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("No watchlist found with id: " + id)
        );
        if(watchlist.deleteWatchlistElement(symbol)){
            watchlistRepository.save(watchlist);
            return true;
        }
        else
            return false;
    }

    public boolean addWatchlistElement(String id, String symbol){
       // try {
            Watchlist watchlist = watchlistRepository.findById(id).orElseThrow(
                    () -> new UsernameNotFoundException("No watchlist found with id: " + id)
            );//getWatchlist(id);

        if(watchlist.addWatchlistElement(symbol)) {
            watchlistRepository.save(watchlist);
            return true;
        }
        else
            return false;



       // }
//        catch(UsernameNotFoundException e){
//            return false;
//        }
    }
}
