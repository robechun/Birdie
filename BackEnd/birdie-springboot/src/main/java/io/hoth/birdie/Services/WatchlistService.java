package io.hoth.birdie.Services;

import io.hoth.birdie.DAO.WatchlistRepository;
import io.hoth.birdie.Entities.UserPrincipal;
import io.hoth.birdie.Entities.Watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WatchlistService {

    @Autowired
    private WatchlistRepository watchlistRepository;


    // GET CURRENT USER
    private UserPrincipal getCurrentUser() {
        return (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    // GET WATCHLIST
    public List<String> getWatchlist(){
        UserPrincipal user = getCurrentUser();

        Watchlist wl = watchlistRepository.findById(user.getWatchListId())
                    .orElseThrow(
                            () -> new UsernameNotFoundException("No watchlist found with id: " + user.getWatchListId())
                            //() -> new NullPointerException("Watchlist is empty with id: " + id)
                    );

        return wl.getWatchlist();
    }

    // CLEAR WATCHLIST
    public boolean clearWatchlist(){

        UserPrincipal user = getCurrentUser();


        Watchlist watchlist = watchlistRepository.findById(user.getWatchListId()).orElseThrow(
                () -> new UsernameNotFoundException("No watchlist found with id: " + user.getWatchListId())
        );


        if(watchlist.clearWatchlist()) {
            watchlistRepository.save(watchlist);
            return true;
        }
        else
            return false; //if list is already empty

    }

    // DELETE WATCHLIST ELEMENT
    public boolean deleteWatchlistElement(String symbol){
        UserPrincipal user = getCurrentUser();

        Watchlist watchlist = watchlistRepository.findById(user.getWatchListId()).orElseThrow(
                () -> new UsernameNotFoundException("No watchlist found with id: " + user.getWatchListId())
        );


        if(watchlist.deleteWatchlistElement(symbol)){
            watchlistRepository.save(watchlist);
            return true;
        }
        else
            return false;
    }


    // ADD TO WATCHLIST
    public boolean addWatchlistElement(String symbol){
        UserPrincipal user = getCurrentUser();

        Watchlist watchlist = watchlistRepository.findById(user.getWatchListId()).orElseThrow(
                () -> new UsernameNotFoundException("No watchlist found with id: " + user.getWatchListId())
        );

        if(watchlist.addWatchlistElement(symbol)) {
            watchlistRepository.save(watchlist);
            return true;
        }
        else
            return false;


    }
}
