package io.hoth.birdie.Entities;


import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Collection;

@Document(collection = "Users")
public class UserDetails implements org.springframework.security.core.userdetails.UserDetails{

    @Id
    private String id;

    @NotNull
    @NotEmpty(message = "Please enter your first name")
    private String firstName;

    @NotNull
    @NotEmpty(message = "Please enter your last name")
    private String lastName;

    @NotNull
    @NotEmpty(message = "Please enter your phone Number")
    private String phoneNumber;

    @NotNull
    @Email(message = "Please enter a valid email address")
    @NotEmpty(message = "Please enter an email address")
    private String email;

    @NotNull
    @NotEmpty(message = "Please enter a password")
    @Length(min = 8)
    private String password;

    @NotNull
    @NotEmpty
    private String username;

    @NotNull
    @NotEmpty
    private String role;

    private boolean isAccountNonLocked = true;
    private boolean isAccountNonExpired = true;
    private boolean isCredentialNonExpired = true;
    private boolean isEnabled = true;

    public UserDetails() {

    }

    public UserDetails(@NotNull @NotEmpty(message = "Please enter your first name") String firstName,
                       @NotNull @NotEmpty(message = "Please enter your last name") String lastName,
                       @NotNull @NotEmpty(message = "Please enter your phone Number") String phoneNumber,
                       @NotNull @Email(message = "Please enter a valid email address") @NotEmpty(message = "Please enter an email address") String email,
                       @NotNull @NotEmpty(message = "Please enter a password") @Length(min = 8) String password,
                       @NotNull @NotEmpty String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.username = email.substring(0,email.indexOf("@"));
        this.role = role;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }



    // Implementing from here

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }




}
