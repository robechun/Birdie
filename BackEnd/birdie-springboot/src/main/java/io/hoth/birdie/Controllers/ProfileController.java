package io.hoth.birdie.Controllers;

import io.hoth.birdie.Services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/profile")
public class ProfileController {

    @Autowired
    ProfileService profileService;

    @PostMapping(value = "/addApiKey")
    public ResponseEntity upsertApiKey(@RequestBody String apiKey) {

        return profileService.addApiKey(apiKey);
    }

    @PostMapping(value = "/addSecret")
    public ResponseEntity upsertSecret(@RequestBody String secret) {
        return profileService.addSecret(secret);
    }

    @PutMapping(value = "/newPassword")
    public ResponseEntity changePassword(@RequestBody String password) {
        return profileService.newPassword(password);
    }
}
