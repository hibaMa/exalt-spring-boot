package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.RequestMedia;
import com.example.demo.services.RequestMediaService;

@RestController
public class RequestMediaController {

	@Autowired
	private RequestMediaService requestMediaService;
	
	@RequestMapping("/api/v1/media")
	public List<RequestMedia> getAllRequestMedia(){
		return requestMediaService.getAllRequestMedias();
	}
	
	@RequestMapping("/api/v1/media/all/{id}")
	public RequestMedia getRequestMedia(@PathVariable long id) {
		 return requestMediaService.getRequestMedia(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/media")
	public void addRequestMedia(@RequestBody RequestMedia requestMedia) {
		requestMediaService.addRequestMedia(requestMedia);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/media/modify")
	public void updateRequestMedia(@RequestBody RequestMedia requestMedia) {
		requestMediaService.updateRequestMedia(requestMedia);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/media/{id}")
	public void deleteRequestMedia(@PathVariable long id) {
		requestMediaService.deleteRequestMedia(id);
 	}

}
