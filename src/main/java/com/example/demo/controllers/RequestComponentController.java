package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.RequestComponent;
import com.example.demo.services.RequestComponentService;

@RestController
public class RequestComponentController {

	@Autowired
	private RequestComponentService requestComponentService;
	
	@RequestMapping("/api/v1/requestComponent")
	public List<RequestComponent> getAllRequestComponent(){
		return requestComponentService.getAllRequestComponents();
	}
	
	@RequestMapping("/api/v1/requestComponent/all/{id}")
	public RequestComponent getRequestComponent(@PathVariable String id) {
		 return requestComponentService.getRequestComponent(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/requestComponent")
	public void addRequestComponent(@RequestBody RequestComponent requestComponent) {
		requestComponentService.addRequestComponent(requestComponent);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/requestComponent/modify")
	public void updateRequestComponent(@RequestBody RequestComponent requestComponent) {
		requestComponentService.updateRequestComponent(requestComponent);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/RequestComponent/{id}")
	public void deleteRequestComponent(@PathVariable String id) {
		requestComponentService.deleteRequestComponent(id);
 	}

}
