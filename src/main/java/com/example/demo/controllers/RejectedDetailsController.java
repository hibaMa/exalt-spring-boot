package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.RejectedDetails;
import com.example.demo.services.RejectedDetailsService;

@RestController
public class RejectedDetailsController {

	@Autowired
	private RejectedDetailsService rejectedDetailsService;
	
	@RequestMapping("/api/v1/rejectedDetails")
	public List<RejectedDetails> getAllRejectedDetails(){
		return rejectedDetailsService.getAllRejectedDetailss();
	}
	
	@RequestMapping("/api/v1/rejectedDetails/all/{id}")
	public RejectedDetails getRejectedDetails(@PathVariable String id) {
		 return rejectedDetailsService.getRejectedDetails(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/rejectedDetails")
	public void addRejectedDetails(@RequestBody RejectedDetails rejectedDetails) {
		rejectedDetailsService.addRejectedDetails(rejectedDetails);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/rejectedDetails/modify")
	public void updateRejectedDetails(@RequestBody RejectedDetails rejectedDetails) {
		rejectedDetailsService.updateRejectedDetails(rejectedDetails);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/rejectedDetails/{id}")
	public void deleteRejectedDetails(@PathVariable String id) {
		rejectedDetailsService.deleteRejectedDetails(id);
 	}

}
