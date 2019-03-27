package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

 import com.example.demo.entities.Project;

public interface ProjectRepository  extends CrudRepository<Project,String>{
	Project findById(long id);

	@Transactional
	@Modifying
	int deleteById(long id);

}
