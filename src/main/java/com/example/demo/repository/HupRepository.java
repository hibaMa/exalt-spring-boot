package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

 import com.example.demo.entities.Hup;

public interface HupRepository  extends CrudRepository<Hup,String>{
	
	Hup findById(long id);

	@Transactional
	@Modifying
	int deleteById(long id);
}
