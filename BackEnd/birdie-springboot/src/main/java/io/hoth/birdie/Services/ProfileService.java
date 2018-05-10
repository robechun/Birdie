package io.hoth.birdie.Services;

import io.hoth.birdie.DAO.UserRepository;
import io.hoth.birdie.Entities.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    UserRepository userRepository;

    private UserPrincipal getCurrentUser() {
        return (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    public ResponseEntity addApiKey(String key) {
        if (userRepository.upsertApiKey(getCurrentUser().getUsername(), key))
            return new ResponseEntity(HttpStatus.OK);

        return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
    }


    public ResponseEntity addSecret(String secret) {
        if (userRepository.upsertSecret(getCurrentUser().getUsername(), secret))
            return new ResponseEntity(HttpStatus.OK);

        return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
    }

    public ResponseEntity newPassword(String pass) {
        if (userRepository.setPassword(getCurrentUser().getUsername(), pass))
            return new ResponseEntity(HttpStatus.OK);

        return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);

    }

}
