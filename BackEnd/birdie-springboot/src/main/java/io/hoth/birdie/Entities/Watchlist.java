package io.hoth.birdie.Entities;

import java.util.LinkedList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Watchlist")
public class Watchlist {

    @Id
    private String id;

    //Potentially should change template type to Coin
    //  (may need to include a member in Coin entity called Symbol)
    private LinkedList<String> watchlist;// = new LinkedList<String>(); //could include a hash as well or LinkedHashMap (maybe)

    // I guess the method below is uneeded since we'd always grab the entire list
    // public String getWatchlistElement(int pos){
    //     if(pos < 0 || pos >= watchlist.size())
    //         return "";
    //     else
    //         return watchlist.get(pos);
    // }

    // Potentially could contain an isValid where it would check if the coin/symbol is a valid one
    // May have to do this through FE or have a list of all coins stored somewhere in BE

    // Description: Getter to grab ID
    // Params: None
    // Returns: Id
    public String getId(){
        return id;
    }

    // Description: Returns entire watchlist
    // Params: None
    // Returns: Watchlist
    public LinkedList<String> getWatchlist(){
        return watchlist;
    }

    public boolean deleteWatchlistElement(String element){ //Hash could make this O(1) instead of O(n)
        for (int i = 0; i < watchlist.size(); i++) {
            if(watchlist.get(i).equals(element)){
                watchlist.remove(i);
                return true;
            }
        }
        return false; // Element not found
    }

    // Description: Clears entire watchlist
    // Params: None
    // Returns: True when watchlist is cleared
    public boolean clearWatchlist(){
        //List is already empty
        if(watchlist == null)
            return false;
        else {
            watchlist.clear();
            return true;
        }
    }

    // Description: Adds a new element to the watchlist
    // Params: Element being added
    // Returns: Success or Failure
    public boolean addWatchlistElement(String symbol){
        // I believe .contains(element) runs in O(n)
        // Could use a Hash with the LL to achieve O(1) run time

        if (watchlist == null) {
            watchlist = new LinkedList<>();
            watchlist.add(symbol);
            return true;
        }

        //Check if element is already in the list
        else if(!watchlist.contains(symbol)){
            watchlist.add(symbol);
            return true;
        }
        else {
            return false;
        }
    }
}