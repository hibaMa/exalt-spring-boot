package com.example.demo.request;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PressComponent {
	
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
	public PressComponent() {}
	public PressComponent(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
}