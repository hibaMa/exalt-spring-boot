package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.RequestDTO;
import com.example.demo.entities.Request;
import com.example.demo.services.RequestService;

@RestController
@RequestMapping("/secure/api/v1/")

public class RequestController {

	@Autowired
	private RequestService requestService;
	
	@RequestMapping("request")
	public List<Request> getAllRequest(){
		return requestService.getAllRequest();
	}
	
	@RequestMapping("request/all/{id}")
	public Request getRequest(@PathVariable long id) {
		 return requestService.getRequest(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="request")
	public void addRequest(@RequestBody RequestDTO request) {
		requestService.addRequest(request);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="request/modify")
	public void updateRequest(@RequestBody Request request) {
		requestService.updateRequest(request);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="request/{id}")
	public void deleteRequest(@PathVariable long id) {
		requestService.deleteRequest(id);
 	}

}
