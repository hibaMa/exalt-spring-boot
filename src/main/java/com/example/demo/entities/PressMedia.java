package com.example.demo.entities;

 

import javax.persistence.Entity;
 import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
 

@Entity
public class PressMedia {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
 

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public PressMedia() {
	}

	public PressMedia(long id, String name ) {
		super();
		this.id = id;
		this.name = name;
		 
	}
	public PressMedia(  String name ) {
		super();
 
		this.name = name;
	 
	}

 

}
