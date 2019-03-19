package com.example.demo.request;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestService {
	
	@Autowired
	private RequestRepository requestRepository;
	
	public List<Request> getAllRequest(){
		 ArrayList<Request> requests= new ArrayList<Request>();
		 Iterator<Request> itr=requestRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 requests.add((Request)itr.next());
		 }
		 return requests;
	}
	
	public Request getRequest(String id) {
		return requestRepository.findById(id).get();
	}
	
	public void addRequest(Request request) {
		requestRepository.save(request);
	}
	
	public void updateRequest(Request request) {
		requestRepository.save(request);
	}

	
	public void deleteRequest(String id) {
		requestRepository.deleteById(id);
	}

	

}
