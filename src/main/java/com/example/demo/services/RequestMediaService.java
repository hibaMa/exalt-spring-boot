package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.RequestMedia;
import com.example.demo.repository.RequestMediaRepository;

@Service
public class RequestMediaService {
	
	@Autowired
	private RequestMediaRepository requestMediaRepository;	
	
	public List<RequestMedia> getAllRequestMedias(){
		 ArrayList<RequestMedia> requestMediaList= new ArrayList<RequestMedia>();
		 Iterator<RequestMedia> itr=requestMediaRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 requestMediaList.add((RequestMedia)itr.next());
		 }
		 return requestMediaList;
	}
	
	public RequestMedia getRequestMedia(String id) {
		return requestMediaRepository.findById(id).get();
	}
	
	public void addRequestMedia(RequestMedia requestMedia) {
		requestMediaRepository.save(requestMedia);
	}
	
	public void updateRequestMedia(RequestMedia requestMedia) {
		requestMediaRepository.save(requestMedia);
	}

	
	public void deleteRequestMedia(String id) {
		requestMediaRepository.deleteById(id);
	}



}
