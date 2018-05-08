package io.hoth.birdie.Controllers;

import io.hoth.birdie.DAO.UserRepository;
import io.hoth.birdie.Entities.LoginDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;

//
//    @Autowired
//    UserDetailsManager manager;
//
//    // TODO donno if works
//    @PostMapping(value = "/login")
//    public ResponseEntity login(HttpServletRequest request, @RequestBody LoginDetails loginDetails) {
//
//
//
//        try {
//            // Must be called from request filtered by Spring Security, otherwise SecurityContextHolder is not updated
//            UsernamePasswordAuthenticationToken token =
//                    new UsernamePasswordAuthenticationToken(loginDetails.getUsername(),
//                                                            loginDetails.getPassword());
//
//
//            //token.setDetails(new WebAuthenticationDetails(request));
//            Authentication auth = manager.authenticate(token);
//            SecurityContext sc = SecurityContextHolder.getContext();
//            sc.setAuthentication(auth);
////            HttpSession session = request.getSession(true);
////            session.setAttribute("SPRING_SECURITY_CONTEXT", sc);
//
//        } catch (Exception e) {
//            System.out.println("Authentication failed: " + e.getMessage());
//            SecurityContextHolder.getContext().setAuthentication(null);
//        }
//
//        System.out.println("Successfully authenticated. Security context contains: " +
//                SecurityContextHolder.getContext().getAuthentication());
//
//
//        return new ResponseEntity(HttpStatus.OK);
//    }
}
