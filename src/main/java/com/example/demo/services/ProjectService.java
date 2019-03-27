package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Project;
import com.example.demo.repository.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;	
	
	public List<Project> getAllProjects(){
		 ArrayList<Project> projects= new ArrayList<Project>();
		 Iterator<Project> itr=projectRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 projects.add((Project)itr.next());
		 }
		 return projects;
	}
	
	public Project getProject(long id) {
		return projectRepository.findById(id);
	}
	
	public void addProject(Project project) {
		projectRepository.save(project);
	}
	
	public void updateProject(Project project) {
		projectRepository.save(project);
	}

	
	public void deleteProject(long id) {
		projectRepository.deleteById(id);
	}



}
