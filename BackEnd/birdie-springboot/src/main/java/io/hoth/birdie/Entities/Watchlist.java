package main.java.io.hoth.birdie.Entities;

import java.util.LinkedList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Watchlist")
public class Watchlist {

    @Id
    private String id;
    //Potentailly should change template type to Coin 
    //  (may need to include a member in Coin entity called Symbol)
    private List<String> watchlist = new LinkedList<String>(); //could include a hash as well or LinkedHashMap (maybe)

    // I guess the method below is uneeded since we'd always grab the entire list
    // public String getWatchlistElement(int pos){
    //     if(pos < 0 || pos >= watchlist.size())
    //         return "";
    //     else
    //         return watchlist.get(pos);
    // }

    // Potentially could contain an isValid where it would check if the coin/symbol is a valid one
    // May have to do this through FE or have a list of all coins stored somewhere in BE

    // Description: Returns entire watchlist
    // Params: None
    // Returns: Watchlist member
    public LinkedList<String> getWatchlist(){
        return watchlist;
    }

    // Description: Deletes element from Watchlist
    // Params: Position of element or the element itself
    // Returns: Success or fail of deletion 
    public boolean deleteWatchlistElement(int pos){
        if(pos < 0 || pos >= watchlist.size())
            return false;
        else {
            watchlist.remove(pos);
            return true;
        }   
    }
    public boolean deleteWatchlistElement(String element){ //Hash could make this O(1) instead of O(n)
        for (int i = 0; i < watchlist.size(); i++) {
            if(watchlist.get(i) == element){
                deleteWatchlistElement(i);
                return true;
            }
        }
        return false; // Element not found
    }

    // Description: Clears entire watchlist
    // Params: None
    // Returns: True when watchlist is cleared
    public boolean clearWatchlist(){
        watchlist.clear();
        return true;
    }

    // Description: Adds a new element to the watchlist
    // Params: Element being added
    // Returns: Success or Failure
    public boolean addWatchlistElement(String element){
        // I believe .contains(element) runs in O(n)
        // Could use a Hash with the LL to achieve O(1) run time

        //Check if element is already in the list
        if(!watchlist.contains(element)){
            watchlist.add(element);
            return true;
        }
        else {
            return false;
        }
    }
}