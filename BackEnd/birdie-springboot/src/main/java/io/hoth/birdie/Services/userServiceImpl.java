//package io.hoth.birdie.Services;
//
//
//import io.hoth.birdie.DAO.UserRepository;
//import io.hoth.birdie.Entities.UserDetails;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//public class userServiceImpl implements userService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;
//
//    @Override
//    public UserDetails findUserById(String id){
//        return userRepository.findByUserId(id);
//    }
//
//    @Override
//    public void saveUser(UserDetails user) {
//        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
//        userRepository.save(user);
//    }
//
//}
