package com.example.demo.repository;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.entities.MediaTypes;

public interface MediaTypeRepository extends CrudRepository<MediaTypes,String>{
	
	MediaTypes findById(long id);
	@Transactional
	@Modifying
	int deleteById(long id);

}
