package beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Press {
	@Id    
	private String id;

//        private Component[] components;

    	private String description;       
//    	private Hub hub;

    	private String imageUrl; 
//        private Media[] media;
    	private String name;

    	private String ph;
    	private String printCare;
    	private String serialNumber;
    	private String series;
    	private String software;
    	private String type;
    	private String utilityCabinet;
    	private String wh;
    	private String whLaserPower;
    	private String whMotorise;
    	private String whType;


		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}

		public String getImageUrl() {
			return imageUrl;
		}
		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}

		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPh() {
			return ph;
		}
		public void setPh(String ph) {
			this.ph = ph;
		}
		public String getPrintCare() {
			return printCare;
		}
		public void setPrintCare(String printCare) {
			this.printCare = printCare;
		}
		public String getSerialNumber() {
			return serialNumber;
		}
		public void setSerialNumber(String serialNumber) {
			this.serialNumber = serialNumber;
		}
		public String getSeries() {
			return series;
		}
		public void setSeries(String series) {
			this.series = series;
		}
		public String getSoftware() {
			return software;
		}
		public void setSoftware(String software) {
			this.software = software;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		public String getUtilityCabinet() {
			return utilityCabinet;
		}
		public void setUtilityCabinet(String utilityCabinet) {
			this.utilityCabinet = utilityCabinet;
		}
		public String getWh() {
			return wh;
		}
		public void setWh(String wh) {
			this.wh = wh;
		}
		public String getWhLaserPower() {
			return whLaserPower;
		}
		public void setWhLaserPower(String whLaserPower) {
			this.whLaserPower = whLaserPower;
		}
		public String getWhMotorise() {
			return whMotorise;
		}
		public void setWhMotorise(String whMotorise) {
			this.whMotorise = whMotorise;
		}
		public String getWhType() {
			return whType;
		}
		public void setWhType(String whType) {
			this.whType = whType;
		}
		public Press() {}
		public Press( String description, String id, String imageUrl,
				String name, String ph, String printCare, String serialNumber, String series, String software,
				String type, String utilityCabinet, String wh, String whLaserPower, String whMotorise, String whType) {
			super();
			this.description = description;
			this.id = id;
			this.imageUrl = imageUrl;
			this.name = name;
			this.ph = ph;
			this.printCare = printCare;
			this.serialNumber = serialNumber;
			this.series = series;
			this.software = software;
			this.type = type;
			this.utilityCabinet = utilityCabinet;
			this.wh = wh;
			this.whLaserPower = whLaserPower;
			this.whMotorise = whMotorise;
			this.whType = whType;
		}
    	
    	
      
}
