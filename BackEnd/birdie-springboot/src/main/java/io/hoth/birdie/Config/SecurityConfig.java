package io.hoth.birdie.Config;

import io.hoth.birdie.Services.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Bean
    public CustomUserDetailsService mongoUserDetails() {
        return new CustomUserDetailsService();
    }

// TODO
//    @Bean
//    public JwtAuthenticationFilter jwtAuthenticationFilter() {
//        return new JwtAuthenticationFilter();
//    }

    // This configuration tells the application to use a custom Authentication Manager
    // We use mongodb instead of the default in-memory store.
    // We also set the password encoder to by bCrypt.
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        CustomUserDetailsService customUserDetailsService = mongoUserDetails();
        auth.userDetailsService(customUserDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }


    // TODO: Figure out what to actually put in here.
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().authorizeRequests() // TODO: csrf disabled for now because if not we get errors

        //http.authorizeRequests()
                .antMatchers("/publicTest/*").permitAll()
                .antMatchers("/privateTest").hasRole("ADMIN")
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                    //.loginPage("/login").loginProcessingUrl("/login")
                    //.failureUrl("/login?error=true").successForwardUrl("/")
                    //.usernameParameter("username").passwordParameter("password").permitAll()
                .and()
                .logout()
                    .logoutSuccessUrl("/").invalidateHttpSession(true).deleteCookies("JSESSIONID").permitAll();
    }

}

// TODO: Enable HTTPS
