package io.hoth.birdie.Controllers;

import io.hoth.birdie.DAO.UserRepository;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class RegistrationController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //TODO MIGHT MOVE TO LOGINCONTROLLER AND RENAME

    // Method to register a new user
    // @Receives: all fields of UserPrincipal
    // @Returns: HttpStatus on fail/success
    // @Description: This method checks to see if UserPrincipal is valid; if valid, encodes given password and saves
    //@CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/register")
    public ResponseEntity register(@RequestBody @Valid UserPrincipal user) {

        // Check to see if the user already exists (by username and email)
        // Returns BAD_REQUEST (400) if user is already registered
        if (userRepository.existsByUsername(user.getUsername()) || userRepository.existsByEmail(user.getEmail())) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        //String password = user.getPassword();
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        //user.setMatchingPassword(bCryptPasswordEncoder.encode(password)); // TODO: DO i even need this?

        // Method to save user to the database.
        // If save fails for whatever reason, return an INTERNAL_SERVER_ERROR (500)
        try {
            userRepository.save(user);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        // TODO: MIGHT BE RETURNING A SESSION AND NOT JUST RESPONSE
        return new ResponseEntity(HttpStatus.OK);
    }
}
