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
public class PressComponentController {

	@Autowired
	private PressComponentService pressComponentService;
	
	@RequestMapping("/api/v1/PressComponent")
	public List<PressComponent> getAllPressComponent(){
		return pressComponentService.getAllPressComponents();
	}
	
	@RequestMapping("/api/v1/PressComponent/all/{id}")
	public PressComponent getPressComponent(@PathVariable String id) {
		 return pressComponentService.getPressComponent(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/PressComponent")
	public void addPressComponent(@RequestBody PressComponent pressComponent) {
		pressComponentService.addPressComponent(pressComponent);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/PressComponent/modify")
	public void updatePressComponent(@RequestBody PressComponent pressComponent) {
		pressComponentService.updatePressComponent(pressComponent);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/PressComponent/{id}")
	public void deletePressComponent(@PathVariable String id) {
		pressComponentService.deletePressComponent(id);
 	}

}
