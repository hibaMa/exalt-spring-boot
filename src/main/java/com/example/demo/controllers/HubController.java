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
@RequestMapping("/secure/api/v1/")
public class HubController {

	@Autowired
	private HubService hubService;
	
	@RequestMapping("hub")
	public List<Hub> getAllHub(){
		return hubService.getAllHubs();
	}
	
	@RequestMapping("hub/all/{id}")
	public Hub getHub(@PathVariable long id) {
		 return hubService.getHub(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="hub")
	public void addHub(@RequestBody Hub hub) {
		hubService.addHub(hub);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="hub/modify")
	public void updateHub(@RequestBody Hub hub) {
		hubService.updateHub(hub);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="hub/{id}")
	public void deleteHub(@PathVariable long id) {
		hubService.deleteHub(id);
 	}

}
