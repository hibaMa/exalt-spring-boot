package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Hub;
import com.example.demo.repository.HubRepository;

@Service
public class HubService {
	
	@Autowired
	private HubRepository hubRepository;	
	
	public List<Hub> getAllHubs(){
		 ArrayList<Hub> hubs= new ArrayList<Hub>();
		 Iterator<Hub> itr=hubRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 hubs.add((Hub)itr.next());
		 }
		 return hubs;
	}
	
	public Hub getHub(String id) {
		return hubRepository.findById(id).get();
	}
	
	public void addHub(Hub hub) {
		hubRepository.save(hub);
	}
	
	public void updateHub(Hub hub) {
		hubRepository.save(hub);
	}

	
	public void deleteHub(String id) {
		hubRepository.deleteById(id);
	}



}
