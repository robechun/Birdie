package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.Coin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoinRepository extends CrudRepository<Coin, String> {

}
