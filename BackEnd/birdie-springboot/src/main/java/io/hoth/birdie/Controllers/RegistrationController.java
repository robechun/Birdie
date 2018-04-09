package io.hoth.birdie.Controllers;

import io.hoth.birdie.DAO.UserRepository;
import io.hoth.birdie.Entities.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @GetMapping(value = "/publicTest/newAccount")
    public String toDelete() {
        System.out.println(bCryptPasswordEncoder.encode("birdiebirdiebirdie"));
        return "Hello world!";
    }

    @PostMapping(value = "/publicTest/newAccount")
    public String register(@RequestBody UserDetails user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        return "register";  //TODO: under the impression the template file will be called "register"
    }
}
