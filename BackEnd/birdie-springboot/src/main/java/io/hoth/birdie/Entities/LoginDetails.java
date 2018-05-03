package io.hoth.birdie.Entities;

import io.hoth.birdie.CustomAnnotation.PasswordMatches;

import javax.validation.constraints.NotBlank;

public class LoginDetails {

    @NotBlank
    private String username;
    @NotBlank
    private String password;

    public LoginDetails() { }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
