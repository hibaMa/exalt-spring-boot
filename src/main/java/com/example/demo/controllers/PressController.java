package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Press;
import com.example.demo.services.PressService;

@RestController
@RequestMapping("/secure/api/v1/")
public class PressController {

	@Autowired
	private PressService pressService;
	
	@RequestMapping("presses")
	public List<Press> getAllPress(){
		return pressService.getAllPress();
	}
	
	@RequestMapping("presses/all/{id}")
	public Press getPress(@PathVariable long id) {
		 return pressService.getPress(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="presses")
	public void addPress(@RequestBody Press press) {
		pressService.addPress(press);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="presses/modify")
	public void updatePress(@RequestBody Press press) {
		pressService.updatePress(press);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="presses/{id}")
	public void deletePress(@PathVariable long id) {
		pressService.deletePress(id);
 	}

}
