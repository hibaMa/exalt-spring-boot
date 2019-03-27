package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Hup;
import com.example.demo.services.HupService;

@RestController
public class HupController {

	@Autowired
	private HupService hupService;
	
	@RequestMapping("/api/v1/hup")
	public List<Hup> getAllHup(){
		return hupService.getAllHups();
	}
	
	@RequestMapping("/api/v1/hup/all/{id}")
	public Hup getHup(@PathVariable long id) {
		 return hupService.getHup(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/hup")
	public void addHup(@RequestBody Hup hup) {
		hupService.addHup(hup);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/hup/modify")
	public void updateHup(@RequestBody Hup hup) {
		hupService.updateHup(hup);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/hup/{id}")
	public void deleteHup(@PathVariable long id) {
		hupService.deleteHup(id);
 	}

}
