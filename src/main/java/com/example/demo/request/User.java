package com.example.demo.request;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {

	@ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinTable(name = "owner_Authority",
			  joinColumns = @JoinColumn(name = "owner_id", referencedColumnName = "id"), 
			  inverseJoinColumns = @JoinColumn(name = "Authority_id", referencedColumnName = "id"))
    private List<Authorities> authorities = new ArrayList<Authorities>();

	private String email;
	private boolean enabled;
	private String firstname;
	@Id 
	private String id;
    private Date lastPasswordResetDate;
	private String password;
	private String username;
	private String lastname;
	
	public List<Authorities> getComponents() {
		return authorities;
	}
	public void setComponents(List<Authorities> authorities) {
		this.authorities = authorities;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Date getLastPasswordResetDate() {
		return lastPasswordResetDate;
	}
	public void setLastPasswordResetDate(Date lastPasswordResetDate) {
		this.lastPasswordResetDate = lastPasswordResetDate;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
		public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public User() {}
	public User(List<Authorities> authorities, String email, boolean enabled, String firstname, String id,
			Date lastPasswordResetDate, String password, String username, String lastname) {
		super();
		this.authorities = authorities;
		this.email = email;
		this.enabled = enabled;
		this.firstname = firstname;
		this.id = id;
		this.lastPasswordResetDate = lastPasswordResetDate;
		this.password = password;
		this.username = username;
		this.lastname = lastname;
	}
 
 

	
	

}
