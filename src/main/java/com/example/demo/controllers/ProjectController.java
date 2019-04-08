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
@RequestMapping("/secure/api/v1/")

public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	@RequestMapping("projects")
	public List<Project> getAllProject(){
		return projectService.getAllProjects();
	}
	
	@RequestMapping("projects/all/{id}")
	public Project getProject(@PathVariable long id) {
		 return projectService.getProject(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="projects")
	public void addProject(@RequestBody Project project) {
		projectService.addProject(project);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="projects/modify")
	public void updateProject(@RequestBody Project project) {
		projectService.updateProject(project);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="projects/{id}")
	public void deleteProject(@PathVariable long id) {
		projectService.deleteProject(id);
 	}

}
