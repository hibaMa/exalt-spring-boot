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
@RequestMapping("/secure/api/v1/")
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping("user")
	public List<User> getAllUser(){
		return userService.getAllUsers();
	}
	
	@RequestMapping("user/all/{id}")
	public User getUser(@PathVariable long id) {
		 return userService.getUser(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="user")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="user/modify")
	public void updateUser(@RequestBody User user) {
		userService.updateUser(user);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="user/{id}")
	public void deleteUser(@PathVariable long id) {
		userService.deleteUser(id);
 	}

}
