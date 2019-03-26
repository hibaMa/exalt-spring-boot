package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Project;
import com.example.demo.services.ProjectService;

@RestController
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	@RequestMapping("/api/v1/projects")
	public List<Project> getAllProject(){
		return projectService.getAllProjects();
	}
	
	@RequestMapping("/api/v1/projects/all/{id}")
	public Project getProject(@PathVariable String id) {
		 return projectService.getProject(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/projects")
	public void addProject(@RequestBody Project project) {
		projectService.addProject(project);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/projects/modify")
	public void updateProject(@RequestBody Project project) {
		projectService.updateProject(project);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/projects/{id}")
	public void deleteProject(@PathVariable String id) {
		projectService.deleteProject(id);
 	}

}
