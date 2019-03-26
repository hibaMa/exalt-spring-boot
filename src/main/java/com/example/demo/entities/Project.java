package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String category;
	private String description;
	private boolean isApproved;
	private String name;
	private int priority;
	private int validTillWeek;

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public boolean isApproved() {
		return isApproved;
	}

	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public int getValidTillWeek() {
		return validTillWeek;
	}

	public void setValidTillWeek(int validTillWeek) {
		this.validTillWeek = validTillWeek;
	}

	public Project() {
	}

	public Project(String category, String description, Long id, boolean isApproved, String name, int priority,
			int validTillWeek) {
		super();
		this.category = category;
		this.description = description;
		this.id = id;
		this.isApproved = isApproved;
		this.name = name;
		this.priority = priority;
		this.validTillWeek = validTillWeek;
	}

}
