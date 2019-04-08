package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.entities.User;

public interface UserRepository  extends CrudRepository<User,String>{
	
	 User findById(long id);
		@Transactional
		@Modifying
		int deleteById(long id);
		User findByEmail(String email);

}
