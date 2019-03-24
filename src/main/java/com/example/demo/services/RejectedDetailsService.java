package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.RejectedDetails;
import com.example.demo.repository.RejectedDetailsRepository;

@Service
public class RejectedDetailsService {
	
	@Autowired
	private RejectedDetailsRepository rejectedDetailsRepository;	
	
	public List<RejectedDetails> getAllRejectedDetailss(){
		 ArrayList<RejectedDetails> RejectedDetailss= new ArrayList<RejectedDetails>();
		 Iterator<RejectedDetails> itr=rejectedDetailsRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 RejectedDetailss.add((RejectedDetails)itr.next());
		 }
		 return RejectedDetailss;
	}
	
	public RejectedDetails getRejectedDetails(String id) {
		return rejectedDetailsRepository.findById(id).get();
	}
	
	public void addRejectedDetails(RejectedDetails rejectedDetails) {
		rejectedDetailsRepository.save(rejectedDetails);
	}
	
	public void updateRejectedDetails(RejectedDetails rejectedDetails) {
		rejectedDetailsRepository.save(rejectedDetails);
	}

	
	public void deleteRejectedDetails(String id) {
		rejectedDetailsRepository.deleteById(id);
	}



}
