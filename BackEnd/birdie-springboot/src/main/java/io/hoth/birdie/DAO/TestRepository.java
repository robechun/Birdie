package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.Test;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends MongoRepository<Test, String> {
}
