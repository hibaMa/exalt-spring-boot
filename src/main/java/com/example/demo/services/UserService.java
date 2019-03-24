package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;	
	
	public List<User> getAllUsers(){
		 ArrayList<User> Users= new ArrayList<User>();
		 Iterator<User> itr=userRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 Users.add((User)itr.next());
		 }
		 return Users;
	}
	
	public User getUser(String id) {
		return userRepository.findById(id).get();
	}
	
	public void addUser(User user) {
		userRepository.save(user);
	}
	
	public void updateUser(User user) {
		userRepository.save(user);
	}

	
	public void deleteUser(String id) {
		userRepository.deleteById(id);
	}



}
