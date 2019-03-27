package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

 import com.example.demo.entities.RequestComponent;

public interface RequestComponentRepository  extends CrudRepository<RequestComponent,String>{
	
	RequestComponent findById(long id);
	@Transactional
	@Modifying
	int deleteById(long id);


}
