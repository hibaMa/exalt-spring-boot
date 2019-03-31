package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.entities.Authorities;

public interface AuthoritiesRepository  extends CrudRepository<Authorities,String>{
	
	Authorities findById(long id);
	@Transactional
	@Modifying
	int deleteById(long id);
	
	Authorities findByName(String name);
}
