package beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Component {
	@Id
	private String compId;
	private String name;
	private int quantity;
	
	public String getCompId() {
		return compId;
	}
	public void setCompId(String compId) {
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
	
	public Component() {}
	
	public Component(String compId, String name, int quantity) {
		super();
		this.compId = compId;
		this.name = name;
		this.quantity = quantity;
	}
	
	
	
}
