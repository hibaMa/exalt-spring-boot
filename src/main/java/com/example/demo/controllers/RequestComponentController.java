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
@RequestMapping("/secure/api/v1/")

public class RequestComponentController {

	@Autowired
	private RequestComponentService requestComponentService;
	
	@RequestMapping("components")
	public List<RequestComponent> getAllRequestComponent(){
		return requestComponentService.getAllRequestComponents();
	}
	
	@RequestMapping("components/all/{id}")
	public RequestComponent getRequestComponent(@PathVariable long id) {
		 return requestComponentService.getRequestComponent(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="components")
	public void addRequestComponent(@RequestBody RequestComponent requestComponent) {
		requestComponentService.addRequestComponent(requestComponent);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="components/modify")
	public void updateRequestComponent(@RequestBody RequestComponent requestComponent) {
		requestComponentService.updateRequestComponent(requestComponent);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="components/{id}")
	public void deleteRequestComponent(@PathVariable long id) {
		requestComponentService.deleteRequestComponent(id);
 	}

}
