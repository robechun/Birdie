package io.hoth.birdie.DAO;

import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserPrincipal, String> {
    Optional<UserPrincipal> findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
