package com.example.demo.entities;

import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
 
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Request {
	
	@Id 
	private String id;
	private String comment;
	private String name;
	private String description;
	private int weekNumber;
	private int  priority;
	private boolean isConsecutive;
	private int shiftsLength;
	private String  type ;
	private boolean isArgent ;
    private String testObjecteves;
    private Date created;
    private String rejectedComment;
    private String status;
    private String testFileType;
    
    


	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private User owner;
    
    @OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "rejectedDetails_id", referencedColumnName = "id")
    private RejectedDetails rejectedDetails;
    
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id", referencedColumnName = "id")
    private Project project = new Project();

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL )
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product = new Product();
    
    @ManyToMany(cascade = CascadeType.ALL ,fetch = FetchType.LAZY )
	@JoinTable(name = "req_comp", joinColumns = @JoinColumn(name = "request_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "comp_id", referencedColumnName = "id"))
    private List<RequestComponent> components = new ArrayList<RequestComponent>();
    
    @ManyToMany(cascade = CascadeType.ALL ,fetch = FetchType.LAZY )
	@JoinTable(name = "req_press", joinColumns = @JoinColumn(name = "request_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "press_id", referencedColumnName = "id"))
    private List<Press> presses = new ArrayList<Press>();
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true ,fetch = FetchType.LAZY )
    @JoinColumn(name = "request_id") 
    private List<RequestMedia> media = new ArrayList<RequestMedia>();
    
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "hub_id", referencedColumnName = "id")
	private Hub hub;

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


	public User getOwner() {
		return owner;
	}


	public void setOwner(User owner) {
		this.owner = owner;
	}


	public RejectedDetails getRejectedDetails() {
		return rejectedDetails;
	}


	public void setRejectedDetails(RejectedDetails rejectedDetails) {
		this.rejectedDetails = rejectedDetails;
	}

    
    public List<RequestComponent> getComponents() {
		return components;
	}


	public void setComponents(List<RequestComponent> components) {
		this.components = components;
	}


	public List<Press> getPresses() {
		return presses;
	}


	public void setPresses(List<Press> presses) {
		this.presses = presses;
	}


	public List<RequestMedia> getMedia() {
		return media;
	}


	public void setMedia(List<RequestMedia> media) {
		this.media = media;
	}

	
	public Project getProject() {
		return project;
	}


	public void setProject(Project project) {
		this.project = project;
	}


	public Hub getHub() {
		return hub;
	}


	public void setHub(Hub hub) {
		this.hub = hub;
	}


	public Request() {
		
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
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


	public Product getProduct() {
		return product;
	}


	public void setProduct(Product product) {
		this.product = product;
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


	public Request(String id, String comment, String name, String description, int weekNumber, int priority,
			boolean isConsecutive, int shiftsLength, String type, boolean isArgent, String testObjecteves, Date created,
			String rejectedComment, String status, String testFileType, User owner, RejectedDetails rejectedDetails,
			Project project, Product product, List<RequestComponent> components, List<Press> presses, List<RequestMedia> media,
			Hub hub) {
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
		this.components = components;
		this.presses = presses;
		this.media = media;
		this.hub = hub;
	}










	
}
