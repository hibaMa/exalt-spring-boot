package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

 @Entity
public class RejectedDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String description;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public RejectedDetails() {
	}

	public RejectedDetails(String description, long id) {
		super();
		this.description = description;
		this.id = id;
	}

	public RejectedDetails(String description) {
		super();
		this.description = description;
		}

}
