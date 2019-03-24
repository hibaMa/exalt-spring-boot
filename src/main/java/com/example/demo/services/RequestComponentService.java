package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.RequestComponent;
import com.example.demo.repository.RequestComponentRepository;

@Service
public class RequestComponentService {
	
	@Autowired
	private RequestComponentRepository requestComponentRepository;	
	
	public List<RequestComponent> getAllRequestComponents(){
		 ArrayList<RequestComponent> requestComponents= new ArrayList<RequestComponent>();
		 Iterator<RequestComponent> itr=requestComponentRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 requestComponents.add((RequestComponent)itr.next());
		 }
		 return requestComponents;
	}
	
	public RequestComponent getRequestComponent(String id) {
		return requestComponentRepository.findById(id).get();
	}
	
	public void addRequestComponent(RequestComponent requestComponent ) {
		requestComponentRepository.save(requestComponent);
	}
	
	public void updateRequestComponent(RequestComponent requestComponent) {
		requestComponentRepository.save(requestComponent);
	}

	
	public void deleteRequestComponent(String id) {
		requestComponentRepository.deleteById(id);
	}



}
