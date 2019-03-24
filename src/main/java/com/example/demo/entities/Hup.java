package com.example.demo.entities;

import javax.persistence.Entity;
 
import javax.persistence.Id;

@Entity
public class Hup {
	@Id 
	private String id;
	private String name;

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Hup() {}
	
	public Hup(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	
}
