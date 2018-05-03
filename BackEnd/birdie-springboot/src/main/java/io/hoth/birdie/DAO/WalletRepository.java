package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.Wallet;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WalletRepository extends MongoRepository<Wallet, String> {
}
