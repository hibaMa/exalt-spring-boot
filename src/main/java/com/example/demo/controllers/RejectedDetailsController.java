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
@RequestMapping("/secure/api/v1/")

public class RejectedDetailsController {

	@Autowired
	private RejectedDetailsService rejectedDetailsService;
	
	@RequestMapping("rejectedDetails")
	public List<RejectedDetails> getAllRejectedDetails(){
		return rejectedDetailsService.getAllRejectedDetailss();
	}
	
	@RequestMapping("rejectedDetails/all/{id}")
	public RejectedDetails getRejectedDetails(@PathVariable long id) {
		 return rejectedDetailsService.getRejectedDetails(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="rejectedDetails")
	public void addRejectedDetails(@RequestBody RejectedDetails rejectedDetails) {
		rejectedDetailsService.addRejectedDetails(rejectedDetails);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="rejectedDetails/modify")
	public void updateRejectedDetails(@RequestBody RejectedDetails rejectedDetails) {
		rejectedDetailsService.updateRejectedDetails(rejectedDetails);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="rejectedDetails/{id}")
	public void deleteRejectedDetails(@PathVariable long id) {
		rejectedDetailsService.deleteRejectedDetails(id);
 	}

}
