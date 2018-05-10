package io.hoth.birdie.Services;
import io.hoth.birdie.DAO.UserRepository;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserDetails user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

        return user;

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

    // This method is used by JWTAuthenticationFilter
    @Transactional
    public UserDetails loadUserById(String id) {
        UserDetails user = userRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id : " + id)
        );

        return user;
        //return UserPrincipal.create(user);
    }

}
