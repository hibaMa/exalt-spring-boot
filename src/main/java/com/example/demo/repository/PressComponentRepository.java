package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

 import com.example.demo.entities.PressComponent;

public interface PressComponentRepository  extends CrudRepository<PressComponent,String>{
	
	PressComponent findById(long id);
	@Transactional
	@Modifying
	int deleteById(long id);

}
