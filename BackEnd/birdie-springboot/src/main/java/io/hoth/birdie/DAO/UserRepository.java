package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.UserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserDetails, String> {
    UserDetails findByUsername(String username);
}
