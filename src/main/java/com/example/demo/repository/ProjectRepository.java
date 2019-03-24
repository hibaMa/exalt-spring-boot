package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entities.Project;

public interface ProjectRepository  extends CrudRepository<Project,String>{
	


}
