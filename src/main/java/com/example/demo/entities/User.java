package com.example.demo.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name = "user_Authorities", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id"))
	private List<Authorities> authorities = new ArrayList<Authorities>();

	private String email;
	private boolean enabled;
	private String firstname;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private Date lastPasswordResetDate;
	private String password;
	private String username;
	private String lastname;

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

	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	public List<Authorities> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(List<Authorities> authorities) {
		this.authorities = authorities;
	}

	public User() {
	}

	public User(List<Authorities> authorities, String email, boolean enabled, String firstname, long id,
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
