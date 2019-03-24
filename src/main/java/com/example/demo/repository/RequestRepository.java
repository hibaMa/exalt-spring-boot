package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entities.Request;

public interface RequestRepository  extends CrudRepository<Request,String>{
	


}
