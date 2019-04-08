package com.example.demo.entities;

 
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
  

@Entity
public class MediaTypes {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	
	@ManyToOne( cascade = CascadeType.ALL , fetch = FetchType.LAZY)
	@JoinColumn(name = "requestMedia_id")
	private  RequestMedia  media = new  RequestMedia();
	
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public RequestMedia getMedia() {
		return media;
	}


	public void setMedia(RequestMedia media) {
		this.media = media;
	}

	

	public MediaTypes(long id, String name, RequestMedia media) {
		super();
		this.id = id;
		this.name = name;
		this.media = media;
	}

	public MediaTypes(  String name, RequestMedia media) {
		super();
		this.name = name;
		this.media = media;
	}

	public MediaTypes() {}

 
 

}
