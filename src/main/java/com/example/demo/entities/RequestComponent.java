package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RequestComponent {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="compId")
	private int compId;
	private String name;
	private int quantity;
	
	public int getid() {
		return compId;
	}
	public void setid(int compId) {
		this.compId = compId;
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
	
	public RequestComponent() {}
	
	public RequestComponent(int compId, String name, int quantity) {
		super();
		this.compId = compId;
		this.name = name;
		this.quantity = quantity;
	}

}
