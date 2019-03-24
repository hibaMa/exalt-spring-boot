package com.example.demo.entities;

import javax.persistence.Entity;
 
import javax.persistence.Id;
@Entity
public class RejectedDetails {
	
	@Id 
	private String id;
	private String description;

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public RejectedDetails() {}
	public RejectedDetails(String description, String id) {
		super();
		this.description = description;
		this.id = id;
	}
	
	
}
