package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PressComponent;
import com.example.demo.repository.PressComponentRepository;

@Service
public class PressComponentService {
	
	@Autowired
	private PressComponentRepository pressComponentRepository;	
	
	public List<PressComponent> getAllPressComponents(){
		 ArrayList<PressComponent> PressComponents= new ArrayList<PressComponent>();
		 Iterator<PressComponent> itr=pressComponentRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 PressComponents.add((PressComponent)itr.next());
		 }
		 return PressComponents;
	}
	
	public PressComponent getPressComponent(long id) {
		return pressComponentRepository.findById(id);
	}
	
	public void addPressComponent(PressComponent PressComponent) {
		pressComponentRepository.save(PressComponent);
	}
	
	public void updatePressComponent(PressComponent PressComponent) {
		pressComponentRepository.save(PressComponent);
	}

	
	public void deletePressComponent(long id) {
		pressComponentRepository.deleteById(id);
	}



}
