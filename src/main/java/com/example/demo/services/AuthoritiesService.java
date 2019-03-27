package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Authorities;
import com.example.demo.repository.AuthoritiesRepository;
@Service
public class AuthoritiesService {

	@Autowired
	private AuthoritiesRepository authoritiesRepository;
	
	public List<Authorities> getAllAuthorities() {
		ArrayList<Authorities> authoritiesList= new ArrayList<Authorities>();
		 Iterator<Authorities> itr=authoritiesRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 authoritiesList.add((Authorities)itr.next());
		 }
		 return authoritiesList;
	}

	public Authorities getAuthority(long id) {
 		return authoritiesRepository.findById(id) ;
	}

	public void addAuthority(Authorities authorities) {
		authoritiesRepository.save(authorities);
	}

	public void updateAuthority(Authorities authorities) {
		authoritiesRepository.save(authorities);

	}

	public void deleteAuthority(long id) {
		authoritiesRepository.deleteById(id);

	}

}
