package com.example.demo.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.PressComponent;
import com.example.demo.services.PressComponentService;

@RestController
@RequestMapping("/secure/api/v1/")

public class PressComponentController {

	@Autowired
	private PressComponentService pressComponentService;
	
	@RequestMapping("pressComponent")
	public List<PressComponent> getAllPressComponent(){
		return pressComponentService.getAllPressComponents();
	}
	
	@RequestMapping("pressComponent/all/{id}")
	public PressComponent getPressComponent(@PathVariable long id) {
		 return pressComponentService.getPressComponent(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="pressComponent")
	public void addPressComponent(@RequestBody PressComponent pressComponent) {
		pressComponentService.addPressComponent(pressComponent);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="pressComponent/modify")
	public void updatePressComponent(@RequestBody PressComponent pressComponent) {
		pressComponentService.updatePressComponent(pressComponent);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="pressComponent/{id}")
	public void deletePressComponent(@PathVariable long id) {
		pressComponentService.deletePressComponent(id);
 	}

}
