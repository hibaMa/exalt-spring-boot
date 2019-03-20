package com.example.demo.request;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class RequestMedia {
	@Id
	private int mediaId;
	private String name;
	private int quantity;
    private String type;
    
    
	public int getMediaId() {
		return mediaId;
	}
	public void setMediaId(int mediaId) {
		this.mediaId = mediaId;
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
	
	public RequestMedia() {}
	
	public RequestMedia(int mediaId, String name, int quantity, String type) {
		super();
		this.mediaId = mediaId;
		this.name = name;
		this.quantity = quantity;
		this.type = type;
	}
    
    
}
