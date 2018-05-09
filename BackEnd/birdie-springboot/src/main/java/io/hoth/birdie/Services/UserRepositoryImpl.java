package io.hoth.birdie.Services;

import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImpl implements UserRepositoryCustom {

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public boolean upsertApiKey(String username, String apiKey) {
        Query query = new Query(Criteria.where("username").is(username));
        Update update = new Update();

        update.set("apiKey", apiKey);

        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, "Users");

        return updateResult.wasAcknowledged();
    }

    @Override
    public boolean upsertSecret(String username, String secret) {
        Query query = new Query(Criteria.where("username").is(username));
        Update update = new Update();

        update.set("secret", secret);

        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, "Users");

        return updateResult.wasAcknowledged();
    }

    @Override
    public boolean setPassword(String username, String password) {
        Query query = new Query(Criteria.where("username").is(username));
        Update update = new Update();

        String newPassword = bCryptPasswordEncoder.encode(password);

        update.set("password", newPassword);
        update.set("matchingPassword", newPassword);


        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, "Users");

        return updateResult.wasAcknowledged();
    }
}
