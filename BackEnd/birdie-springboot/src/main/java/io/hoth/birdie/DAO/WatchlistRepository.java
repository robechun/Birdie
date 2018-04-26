package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.Watchlist;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WatchlistRepository extends MongoRepository<Watchlist, String> {
    //No idea
}
