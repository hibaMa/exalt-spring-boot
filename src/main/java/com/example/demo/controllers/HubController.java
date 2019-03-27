package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Hub;
import com.example.demo.services.HubService;

@RestController
public class HubController {

	@Autowired
	private HubService hubService;
	
	@RequestMapping("/api/v1/hub")
	public List<Hub> getAllHub(){
		return hubService.getAllHubs();
	}
	
	@RequestMapping("/api/v1/hub/all/{id}")
	public Hub getHub(@PathVariable long id) {
		 return hubService.getHub(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/hub")
	public void addHub(@RequestBody Hub hub) {
		hubService.addHub(hub);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/hub/modify")
	public void updateHub(@RequestBody Hub hub) {
		hubService.updateHub(hub);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/hub/{id}")
	public void deleteHub(@PathVariable long id) {
		hubService.deleteHub(id);
 	}

}
