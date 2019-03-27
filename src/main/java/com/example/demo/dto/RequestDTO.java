package com.example.demo.dto;

import java.util.*;
 


public class RequestDTO {

	private long id;
	private String comment;
	private String name;
	private String description;
	private int weekNumber;
	private int priority;
	private boolean isConsecutive;
	private int shiftsLength;
	private String type;
	private boolean isArgent;
	private String testObjecteves;
	private Date created;
	private String rejectedComment;
	private String status;
	private String testFileType;
	private long owner;
	private long rejectedDetails;
	private long project;
	private long product ;
	private long hub;
    private long[] components ;
    private long[] presses;
    private long[] media ;
    
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getWeekNumber() {
		return weekNumber;
	}
	public void setWeekNumber(int weekNumber) {
		this.weekNumber = weekNumber;
	}
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}
	public boolean isConsecutive() {
		return isConsecutive;
	}
	public void setConsecutive(boolean isConsecutive) {
		this.isConsecutive = isConsecutive;
	}
	public int getShiftsLength() {
		return shiftsLength;
	}
	public void setShiftsLength(int shiftsLength) {
		this.shiftsLength = shiftsLength;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public boolean isArgent() {
		return isArgent;
	}
	public void setArgent(boolean isArgent) {
		this.isArgent = isArgent;
	}
	public String getTestObjecteves() {
		return testObjecteves;
	}
	public void setTestObjecteves(String testObjecteves) {
		this.testObjecteves = testObjecteves;
	}
	public Date getCreated() {
		return created;
	}
	public void setCreated(Date created) {
		this.created = created;
	}
	public String getRejectedComment() {
		return rejectedComment;
	}
	public void setRejectedComment(String rejectedComment) {
		this.rejectedComment = rejectedComment;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getTestFileType() {
		return testFileType;
	}
	public void setTestFileType(String testFileType) {
		this.testFileType = testFileType;
	}
	public long getOwner() {
		return owner;
	}
	public void setOwner(long owner) {
		this.owner = owner;
	}
	public long getRejectedDetails() {
		return rejectedDetails;
	}
	public void setRejectedDetails(long rejectedDetails) {
		this.rejectedDetails = rejectedDetails;
	}
	public long getProject() {
		return project;
	}
	public void setProject(long project) {
		this.project = project;
	}
	public long getProduct() {
		return product;
	}
	public void setProduct(long product) {
		this.product = product;
	}
	public long getHub() {
		return hub;
	}
	public void setHub(long hub) {
		this.hub = hub;
	}
	public long[] getComponents() {
		return components;
	}
	public void setComponents(long[] components) {
		this.components = components;
	}
	public long[] getPresses() {
		return presses;
	}
	public void setPresses(long[] presses) {
		this.presses = presses;
	}
	public long[] getMedia() {
		return media;
	}
	public void setMedia(long[] media) {
		this.media = media;
	}
	
	
	public RequestDTO() {}
	
	public RequestDTO(long id, String comment, String name, String description, int weekNumber, int priority,
			boolean isConsecutive, int shiftsLength, String type, boolean isArgent, String testObjecteves, Date created,
			String rejectedComment, String status, String testFileType, long owner, long rejectedDetails, long project,
			long product, long hub, long[] components, long[] presses, long[] media) {
		super();
		this.id = id;
		this.comment = comment;
		this.name = name;
		this.description = description;
		this.weekNumber = weekNumber;
		this.priority = priority;
		this.isConsecutive = isConsecutive;
		this.shiftsLength = shiftsLength;
		this.type = type;
		this.isArgent = isArgent;
		this.testObjecteves = testObjecteves;
		this.created = created;
		this.rejectedComment = rejectedComment;
		this.status = status;
		this.testFileType = testFileType;
		this.owner = owner;
		this.rejectedDetails = rejectedDetails;
		this.project = project;
		this.product = product;
		this.hub = hub;
		this.components = components;
		this.presses = presses;
		this.media = media;
	}

    
}
