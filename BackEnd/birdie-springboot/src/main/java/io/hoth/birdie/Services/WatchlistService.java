package io.hoth.birdie.Services;

import io.hoth.birdie.DAO.WatchlistRepository;
import io.hoth.birdie.Entities.Watchlist;

import java.util.ArrayList;
import java.util.List;

public class WatchlistService {

    private WatchlistRepository watchlistRepository;

    public Watchlist getWatchlist(){
        List<Watchlist> listOfWatchlist = new ArrayList<Watchlist>();
        listOfWatchlist = watchlistRepository.findAll();
        if(listOfWatchlist.size() == 0)
            return null;
        return listOfWatchlist.get(0); //returns first instance of watchlist (will be
    }

    public boolean clearWatchlist(){
        //stub
        return false;
    }

    public boolean deleteWatchlistElement(String element){
        //stub
        return false;
    }

    public boolean deleteWatchlistElement(int pos){
        //stub
        return false;
    }

    public boolean addWatchlistElement(String element){
        //stub
        return false;
    }


}
