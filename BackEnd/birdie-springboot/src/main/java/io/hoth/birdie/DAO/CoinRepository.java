package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.Coin;
import io.hoth.birdie.Services.CoinRepositoryCustom;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CoinRepository extends MongoRepository<Coin, String>, CoinRepositoryCustom {
    Coin findByName(String name);
}