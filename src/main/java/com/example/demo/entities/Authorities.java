package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

 
@Entity
public class Authorities {

	private String name;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	public long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Authorities() {
	}

	public Authorities(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	

	public Authorities(  String name) {
		super();
 		this.name = name;
	}
}
