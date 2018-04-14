//package io.hoth.birdie;
//
//import io.hoth.birdie.DAO.UserRepository;
//import io.hoth.birdie.DAO.YourmomRepository;
//import io.hoth.birdie.Entities.UserDetails;
//import io.hoth.birdie.Entities.Yoyo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import java.util.Arrays;
//import java.util.List;
//
//@Component
//public class MomDbSeeder implements CommandLineRunner{
//    private YourmomRepository yourmomRepository;
//    private UserRepository userRepository;
//
//    @Autowired
//    BCryptPasswordEncoder bCryptPasswordEncoder;
//
//    public MomDbSeeder(YourmomRepository yourmomRepository, UserRepository userRepository) {
//        this.yourmomRepository = yourmomRepository;
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//        Yoyo robert = new Yoyo(
//                "Robert",
//                "ChungTEst1"
//        );
//
//        Yoyo rafael = new Yoyo(
//                "Rafffff",
//                "Vallldeezzz"
//        );
//
//        UserDetails userOne = new UserDetails(
//                "Robert",
//                "Chung",
//                "1111111111",
//                "testing@test.com",
//                bCryptPasswordEncoder.encode("birdiebirdie"),
//                "ADMIN"
//        );
//
//        UserDetails userTwo = new UserDetails(
//                "Bob",
//                "Bobby",
//                "22222222222",
//                "Bob@test.com",
//                "birdiebirdiebirdie",
//                "USER"
//        );
//
//        this.yourmomRepository.deleteAll();
//        List<Yoyo> yoyos = Arrays.asList(robert, rafael);
//        this.yourmomRepository.saveAll(yoyos);
//
//        this.userRepository.deleteAll();;
//        List<UserDetails> users = Arrays.asList(userOne, userTwo);
//        this.userRepository.saveAll(users);
//    }
//
//
//}
