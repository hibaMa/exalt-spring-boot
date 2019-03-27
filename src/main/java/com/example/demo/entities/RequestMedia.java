package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RequestMedia {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private int quantity;
	private String type;

	public long getid() {
		return id;
	}

	public void setid(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public RequestMedia() {
	}

	public RequestMedia(long id, String name, int quantity, String type) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.type = type;
	}

}
