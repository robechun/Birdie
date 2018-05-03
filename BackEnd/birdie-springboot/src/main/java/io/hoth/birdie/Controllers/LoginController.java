package io.hoth.birdie.Controllers;

import io.hoth.birdie.DAO.UserRepository;
import io.hoth.birdie.Entities.LoginDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;


//    // TODO donno if works
//    @PostMapping(value = "/login")
//    public ResponseEntity login(@RequestBody LoginDetails loginDetails) {
//
//
//        return new ResponseEntity(HttpStatus.OK);
//    }
}
