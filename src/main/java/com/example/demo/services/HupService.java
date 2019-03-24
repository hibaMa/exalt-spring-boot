package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Hup;
import com.example.demo.repository.HupRepository;

@Service
public class HupService {
	
	@Autowired
	private HupRepository hupRepository;	
	
	public List<Hup> getAllHups(){
		 ArrayList<Hup> hups= new ArrayList<Hup>();
		 Iterator<Hup> itr=hupRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 hups.add((Hup)itr.next());
		 }
		 return hups;
	}
	
	public Hup getHup(String id) {
		return hupRepository.findById(id).get();
	}
	
	public void addHup(Hup hup) {
		hupRepository.save(hup);
	}
	
	public void updateHup(Hup hup) {
		hupRepository.save(hup);
	}

	
	public void deleteHup(String id) {
		hupRepository.deleteById(id);
	}



}
