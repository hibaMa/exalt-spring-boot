package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PressMedia ;
import com.example.demo.repository.PressMediaRepository;

@Service
public class PressMediaService {
	
	@Autowired
	private PressMediaRepository pressMediaRepository;	
	
	public List<PressMedia> getAllPressMedias(){
		 ArrayList<PressMedia> pressMedias= new ArrayList<PressMedia>();
		 Iterator<PressMedia> itr=pressMediaRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 pressMedias.add((PressMedia)itr.next());
		 }
		 return pressMedias;
	}
	
	public PressMedia getPressMedia(String id) {
		return pressMediaRepository.findById(id).get();
	}
	
	public void addPressMedia(PressMedia pressMedia) {
		pressMediaRepository.save(pressMedia);
	}
	
	public void updatePressMedia(PressMedia pressMedia) {
		pressMediaRepository.save(pressMedia);
	}

	
	public void deletePressMedia(String id) {
		pressMediaRepository.deleteById(id);
	}



}
