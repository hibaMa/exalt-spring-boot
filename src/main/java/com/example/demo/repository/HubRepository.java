package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

 import com.example.demo.entities.Hub;

public interface HubRepository  extends CrudRepository<Hub,String>{
	
	Hub findById(long id);
	@Transactional
	@Modifying
	int deleteById(long id);
	
	Hub findByName(String name);
}
