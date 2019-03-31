package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.MediaTypes;
 import com.example.demo.repository.MediaTypeRepository;

@Service
public class MediaTypeService {

	@Autowired
	private MediaTypeRepository mediaTypeRepository;	
	
	public List<MediaTypes> getAllmediaType() {
		ArrayList<MediaTypes> mediaTypes= new ArrayList<MediaTypes>();
		Iterator<MediaTypes> itr=mediaTypeRepository.findAll().iterator();
		while(itr.hasNext()) {
			mediaTypes.add(itr.next());
		 }
 		return mediaTypes;
	}

	public MediaTypes getmediaType(long id) {
 		return mediaTypeRepository.findById(id);
	}

	public void addmediaType(MediaTypes mediaType) {
		mediaTypeRepository.save(mediaType);
	}

	public void updatemediaType(MediaTypes mediaType) {
		mediaTypeRepository.save(mediaType);
	}

	public void deletemediaType(long id) {
		mediaTypeRepository.deleteById(id);
	}

}
