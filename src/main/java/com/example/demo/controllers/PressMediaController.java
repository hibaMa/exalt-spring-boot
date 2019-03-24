package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.PressMedia;
import com.example.demo.services.PressMediaService;

@RestController
public class PressMediaController {

	@Autowired
	private PressMediaService pressMediaService;
	
	@RequestMapping("/api/v1/pressMedia")
	public List<PressMedia> getAllPressMedia(){
		return pressMediaService.getAllPressMedias();
	}
	
	@RequestMapping("/api/v1/pressMedia/all/{id}")
	public PressMedia getPressMedia(@PathVariable String id) {
		 return pressMediaService.getPressMedia(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/pressMedia")
	public void addPressMedia(@RequestBody PressMedia pressMedia) {
		pressMediaService.addPressMedia(pressMedia);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/pressMedia/modify")
	public void updatePressMedia(@RequestBody PressMedia pressMedia) {
		pressMediaService.updatePressMedia(pressMedia);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/pressMedia/{id}")
	public void deletePressMedia(@PathVariable String id) {
		pressMediaService.deletePressMedia(id);
 	}

}
