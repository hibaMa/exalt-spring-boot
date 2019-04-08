package com.example.demo.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String category;
	private String description;
	private boolean isApproved;
	private String name;
	private int priority;
	private int validTillWeek;

	@ManyToOne
	@JoinColumn(name = "hub_id", referencedColumnName = "id")
	private Hub hub;

	@OneToMany(fetch = FetchType.LAZY, orphanRemoval = true)
	@JoinColumn(name = "project_id", referencedColumnName = "id")
	private List<Product> product;

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

	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	public Hub getHub() {
		return hub;
	}

	public void setHub(Hub hub) {
		this.hub = hub;
	}

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	public Project() {
	}

	public Project(String category, int priority, String description, int validTillWeek, boolean isApproved,
			String name, Hub hub, List<Product> product) {
		super();

		this.category = category;
		this.description = description;
		this.isApproved = isApproved;
		this.name = name;
		this.priority = priority;
		this.validTillWeek = validTillWeek;
		this.hub = hub;
		this.product = product;
	}

}
