package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Authorities;
 import com.example.demo.services.AuthoritiesService;
@RestController
@RequestMapping("/secure/api/v1/")
public class AuthoritiesController {
	 
	@Autowired
	private AuthoritiesService authoritiesService;
	
	@RequestMapping("authorities")
	public List<Authorities> getAllRequest(){
		return authoritiesService.getAllAuthorities();
	}
	
	@RequestMapping("authorities/all/{id}")
	public Authorities getAuthority(@PathVariable long id) {
		 return authoritiesService.getAuthority(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="authorities")
	public void addAuthority(@RequestBody Authorities authorities) {
		authoritiesService.addAuthority(authorities);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="authorities/modify")
	public void updateAuthority(@RequestBody Authorities authorities) {
		authoritiesService.updateAuthority(authorities);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="authorities/{id}")
	public void deleteAuthority(@PathVariable long id) {
		authoritiesService.deleteAuthority(id);
 	}
}

