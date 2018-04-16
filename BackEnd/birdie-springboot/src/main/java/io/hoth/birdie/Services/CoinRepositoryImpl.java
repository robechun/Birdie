package io.hoth.birdie.Services;

import com.mongodb.client.result.UpdateResult;
import io.hoth.birdie.Entities.Coin;
import io.hoth.birdie.Entities.CoinEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CoinRepositoryImpl implements CoinRepositoryCustom{

    @Autowired
    MongoTemplate mongoTemplate;

    // CUSTOM update coin entry
    // Finds the correct document and stores the information of the coin in there
    // 
    @Override
    public boolean updateCoinEntries(String name, List<CoinEntry> entries) {

        Query query = new Query(Criteria.where("name").is(name));
        Update update = new Update();

        update.push("coinEntries").each(entries);

        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, Coin.class);

        return updateResult.wasAcknowledged();
    }
}
