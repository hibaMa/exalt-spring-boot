package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping("/api/v1/user")
	public List<User> getAllUser(){
		return userService.getAllUsers();
	}
	
	@RequestMapping("/api/v1/user/all/{id}")
	public User getUser(@PathVariable long id) {
		 return userService.getUser(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/user")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/user/modify")
	public void updateUser(@RequestBody User user) {
		userService.updateUser(user);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/user/{id}")
	public void deleteUser(@PathVariable long id) {
		userService.deleteUser(id);
 	}

}
