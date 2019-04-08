package com.example.demo.controllers;

import java.util.Date;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

class Token{
	String tokenValue;

	public String getTokenValue() {
		return tokenValue;
	}

	public void setTokenValue(String tokenValue) {
		this.tokenValue = tokenValue;
	}

	public Token(String tokenValue) {
		this.tokenValue = tokenValue;
	}
}

@RestController
public class LogInController {
	@Autowired
	UserService userService;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Token login(@RequestBody User login) throws ServletException {
		String jwtToken = "";
		if (login.getEmail() == null || login.getPassword() == null) {
			throw new ServletException("Please fill in username and password");
		}

		String email = login.getEmail();
		String password = login.getPassword();

		User user = userService.getUserByEmail(login.getEmail());

		if (user == null) {
			throw new ServletException("User email not found. register");
		}
		String pwd = user.getPassword();

		if (!password.equals(pwd)) {
			throw new ServletException("Invalid login. Please check your name and password.");
		}

		jwtToken = Jwts.builder().setSubject(email).claim("roles", "user").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "secretkey").compact();

		return new Token(jwtToken);
	}

}
