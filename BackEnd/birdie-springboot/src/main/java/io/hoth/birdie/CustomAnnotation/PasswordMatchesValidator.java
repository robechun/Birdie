package io.hoth.birdie.CustomAnnotation;


import io.hoth.birdie.Entities.UserPrincipal;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator
        implements ConstraintValidator<PasswordMatches, Object> {

    @Override
    public void initialize(PasswordMatches constraintAnnotation) {
    }
    @Override
    public boolean isValid(Object obj, ConstraintValidatorContext context){
        UserPrincipal user = (UserPrincipal) obj;
        return user.getPassword().equals(user.getMatchingPassword());
    }
}