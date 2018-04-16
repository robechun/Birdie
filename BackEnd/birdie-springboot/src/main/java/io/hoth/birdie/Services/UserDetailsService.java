package io.hoth.birdie.Services;
import io.hoth.birdie.DAO.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserDetails test = userRepository.findByUsername(username);
        return userRepository.findByUsername(username);

// TODO: Ignore whitespace
// TODO: Error catching and stuff (like below)
//        MongoCollection<Document> collection = database.getCollection("users");
//        Document document = collection.find(Filters.eq("email",email)).first();
//        if(document!=null) {
//            String name = document.getString("name");
//            String surname = document.getString("surname");
//            String password = document.getString("password");
//            List<String> authorities = (List<String>) document.get("authorities");
//            MongoUserDetails mongoUserDetails = new MongoUserDetails(email,password,authorities.toArray(new String[authorities.size()]));
//            return mongoUserDetails;
//        }
//        return null;

    }
}
