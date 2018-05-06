package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.Watchlist;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WatchlistRepository extends MongoRepository<Watchlist, String> {
    Optional<Watchlist> findById(String s);
}
