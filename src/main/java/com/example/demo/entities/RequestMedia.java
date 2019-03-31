package com.example.demo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class RequestMedia {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private int quantity;

	 
	@OneToMany( cascade = CascadeType.ALL,orphanRemoval = true, fetch = FetchType.LAZY)
	@JoinColumn(name = "requestMedia_id")
	private List<MediaTypes> types = new ArrayList<MediaTypes>();
		
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

	public List<MediaTypes> getTypes() {
		return types;
	}

	public void setTypes(List<MediaTypes> types) {
		this.types = types;
	}


	public RequestMedia() {
	}

	public RequestMedia(long id, String name, int quantity, List<MediaTypes> types) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.types = types;
	}
	
	public RequestMedia( String name, int quantity, List<MediaTypes> types) {
		super();
 
		this.name = name;
		this.quantity = quantity;
		this.types = types;
	}
	
	public RequestMedia( String name,   List<MediaTypes> types) {
		super();
 
		this.name = name;
 
		this.types = types;
	}
 

}
