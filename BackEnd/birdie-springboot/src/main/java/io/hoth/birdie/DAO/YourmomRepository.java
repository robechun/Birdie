package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.Yoyo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YourmomRepository extends MongoRepository<Yoyo, String> {
}
