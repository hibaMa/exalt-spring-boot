package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Press;
import com.example.demo.repository.PressRepository;

@Service
public class PressService {
	
	@Autowired
	private PressRepository pressRepository;	
	
	public List<Press> getAllPress(){
		 ArrayList<Press> PressList= new ArrayList<Press>();
		 Iterator<Press> itr=pressRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 PressList.add((Press)itr.next());
		 }
		 return PressList;
	}
	
	public Press getPress(String id) {
		return pressRepository.findById(id).get();
	}
	
	public void addPress(Press Press) {
		pressRepository.save(Press);
	}
	
	public void updatePress(Press Press) {
		pressRepository.save(Press);
	}

	
	public void deletePress(String id) {
		pressRepository.deleteById(id);
	}



}
