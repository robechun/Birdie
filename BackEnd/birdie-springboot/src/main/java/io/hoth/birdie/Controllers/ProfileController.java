package io.hoth.birdie.Controllers;

import io.hoth.birdie.DAO.UserRepository;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/profile")
public class ProfileController {

    @Autowired
    UserRepository userRepository;

    // TODO: HAVE NOT BEEN TESTED!!
    @PostMapping(value = "/addApiKey")
    public ResponseEntity upsertApiKey(@RequestBody String apiKey) {
        UserPrincipal currentUser = (UserPrincipal)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();


        if (userRepository.upsertApiKey(currentUser.getUsername(), apiKey))
            return new ResponseEntity(HttpStatus.OK);

        return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);

    }


    // TODO: HAVE NOT BEEN TESTED!!
    @PostMapping(value = "/addSecret")
    public ResponseEntity upsertSecret(@RequestBody String secret) {
        UserPrincipal currentUser = (UserPrincipal)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();


        if (userRepository.upsertSecret(currentUser.getUsername(), secret))
            return new ResponseEntity(HttpStatus.OK);

        return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);

    }
}
