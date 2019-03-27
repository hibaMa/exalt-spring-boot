package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

 import com.example.demo.entities.Request;

public interface RequestRepository  extends CrudRepository<Request,String>{
	
	Request findById(long id);
	@Transactional
	@Modifying
	int deleteById(long id);

}
