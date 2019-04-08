package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.MediaTypes;
import com.example.demo.services.MediaTypeService;
 
 @RestController
 @RequestMapping("/secure/api/v1/")

public class MediaTypeController {
	 
	@Autowired
	private MediaTypeService mediaTypeService;
	
	@RequestMapping("mediaType")
	public List<MediaTypes> getAllRequest(){
		return mediaTypeService.getAllmediaType();
	}
	
	@RequestMapping("mediaType/all/{id}")
	public MediaTypes getmediaType(@PathVariable long id) {
		 return mediaTypeService.getmediaType(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="mediaType")
	public void addmediaType(@RequestBody MediaTypes mediaType) {
		mediaTypeService.addmediaType(mediaType);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="mediaType/modify")
	public void updatemediaType(@RequestBody MediaTypes mediaType) {
		mediaTypeService.updatemediaType(mediaType);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="mediaType/{id}")
	public void deletemediaType(@PathVariable long id) {
		mediaTypeService.deletemediaType(id);
 	}
}

