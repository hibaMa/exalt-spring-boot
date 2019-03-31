package com.example.demo.services;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.entities.Authorities;
import com.example.demo.entities.Hub;
import com.example.demo.entities.MediaTypes;
import com.example.demo.entities.Press;
import com.example.demo.entities.PressComponent;
import com.example.demo.entities.PressMedia;
import com.example.demo.entities.Product;
import com.example.demo.entities.Project;
import com.example.demo.entities.RejectedDetails;
import com.example.demo.entities.RequestComponent;
import com.example.demo.entities.RequestMedia;
import com.example.demo.entities.User;
import com.example.demo.repository.AuthoritiesRepository;
import com.example.demo.repository.HubRepository;
import com.example.demo.repository.PressComponentRepository;
import com.example.demo.repository.PressMediaRepository;
import com.example.demo.repository.PressRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.RejectedDetailsRepository;
import com.example.demo.repository.RequestComponentRepository;
import com.example.demo.repository.RequestMediaRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

 

@Service
public class RunService {

	@Transactional
	public void fillData() throws UnsupportedEncodingException {

		createAuthorities();
		createUsers(); 
		createHubs();
//		createConfigrations();
		createMedia();
		createPressMedia();
		createComponents();
		createPressComponent();
		createProducts();
		createProjects();
		createRejectedDetails();
		createPresses();
		
	}

	@Autowired
	PressComponentRepository pressComponentRepository; 
	private void createPressComponent() {
		pressComponentRepository.save(new PressComponent("press comp 1"));
		pressComponentRepository.save(new PressComponent("press comp 2"));
		pressComponentRepository.save(new PressComponent("press comp 3"));
		pressComponentRepository.save(new PressComponent("press comp 4"));
		
	}
	
	@Autowired
	PressMediaRepository pressMediaRepository; 
	private void createPressMedia() {
		pressMediaRepository.save(new PressMedia("press media 1"));
		pressMediaRepository.save(new PressMedia("press media 2"));
		pressMediaRepository.save(new PressMedia("press media 3"));
		pressMediaRepository.save(new PressMedia("press media 4"));

		
	}

	@Autowired
	RejectedDetailsRepository rejectedDetailsRepository;

	private void createRejectedDetails() {
		rejectedDetailsRepository.save(new RejectedDetails("Operator absence"));
		rejectedDetailsRepository.save(new RejectedDetails("Press maintenance"));
		rejectedDetailsRepository.save(new RejectedDetails("Testing hub"));
	}

	@Autowired
	UserRepository userRepository;

	private void createUsers() {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode("12345");
		List<Authorities> authorities = new ArrayList<>();
		authorities.add(authrityRepository.findByName("auth1"));
		User user = new User(authorities,"hiba@gmail.com",true, "hiba",new Date(), hashedPassword,  "hiba", "malhis" );
		userRepository.save(user);

	}
	
	@Autowired
	private AuthoritiesRepository authrityRepository;

	private void createAuthorities() {
		String [] AuthorityName= {"auth1","auth2","auth3","auth4","auth5","auth6","auth7"};
		for (String auth : AuthorityName) {
			Authorities authority = new Authorities(auth);
			authrityRepository.save(authority);
		}
	}



	@Autowired
	private HubRepository hubRepository;


	private void createHubs() {
		Hub hub = new Hub("Hub 1");
		hubRepository.save(hub);
	}
	

	@Autowired
	private PressRepository pressRepository;
 
	private void createPresses() {
		Hub hub = hubRepository.findByName("Hub 1");
		List<PressComponent> components = new ArrayList<>();  
		components.add(	pressComponentRepository.findByName("press comp 1"));
		components.add(	pressComponentRepository.findByName("press comp 2"));
		List<PressMedia> media = new ArrayList<>();
		media.add(pressMediaRepository.findByName("press media 1"));
		media.add(pressMediaRepository.findByName("press media 2"));

		Press press = new Press("Shani - MR306", "/images/S4SF.png",
				"Shani", "", "S4SF", "", "", 
				"", "", "", "", "",
				"", "", hub, media, components);
		pressRepository.save(press);

		press = new Press("Eilat - PP14", "/images/S4SF.png", "Eilat", "50000114", "S4SF", "", "", "", "", "", "", "",
				"", "", hub, media, components);
		pressRepository.save(press);

		press = new Press("Meron - 35", "/images/S2S3.png", "Meron", "40000035", "S3SF", "", "", "", "", "", "", "", "",
				"", hub, media, components);
		pressRepository.save(press);

		press = new Press("Yagur - 230", "/images/S4SFA.png", "Yagur", "43000230", "S4SF", "", "", "", "", "", "", "",
				"", "", hub, media, components);
		pressRepository.save(press);

		components = new ArrayList<>();  
		components.add(	pressComponentRepository.findByName("press comp 3"));
		components.add(	pressComponentRepository.findByName("press comp 4"));
		media = new ArrayList<>();
		media.add(pressMediaRepository.findByName("press media 3"));
		media.add(pressMediaRepository.findByName("press media 4"));
		press = new Press("Geva - 177", "/images/S3Web.png", "Geva", "44000177", "S3Web", "", "", "", "", "", "", "",
				"", "", hub, media, components);
		pressRepository.save(press);


		press = new Press("Arbel - 01", "/images/S2S3.png", "Arbel", "47000001", "S3SF", "", "", "", "", "", "", "", "",
				"", hub, media, components);
		pressRepository.save(press);

	
		press = new Press("Kinneret - 01", "/images/S2S3.png", "Kinneret", "", "S2SF", "", "", "", "", "", "", "", "",
				"", hub, media, components);
		pressRepository.save(press);

	}

	@Autowired
	private RequestMediaRepository mediaRepository;
 

	private void createMedia() {
		List<MediaTypes> mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("Condat 115gsm Gloss primed 33",mediaType));
		
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("Hadar top 110gsm primed 33",mediaType));

		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("PET clear (Sarafil -DP100-1G) 12mic primed 33",mediaType));
	
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("Condat Digital 135gsm Gloss 32x46.4 LG",mediaType));
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
 		mediaRepository.save(new RequestMedia("Condat Digital 170gsm matte 32x46.4 LG",mediaType));
	
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("Condat Digital 170gsm Gloss 32x46.4 LG",mediaType));
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("Munken 170gsm 32x46.4",mediaType));
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("Hadar top 170gsm Uncoated 75x53 SG" ,mediaType));
		
		 
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("Century Soho symbol free life (PW) 130gsm Gloss 75x53 SG"  ,mediaType)); 		
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia( "Century Soho symbol free life 170gsm Gloss 75x53 SG"  ,mediaType)); 		
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia( "Anthem 148gsm 75x53 coated matte" ,mediaType)); 
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia("Invercote G SBB/GZ 300gsm  53x75 LG"  ,mediaType)); 
		
		mediaType = new ArrayList<>();
		mediaType.add( new MediaTypes("Roll"));
		mediaType.add( new MediaTypes("Sheets (# package)"));
		mediaRepository.save(new RequestMedia( "Printa_WLC/GD2 300gsm  50x70 LG" ,mediaType)); 

   
	}

	@Autowired
	private RequestComponentRepository componentRepository;

	private void createComponents() {
		 for(int i=0;i<10;i++)
		 {
			 RequestComponent component=new RequestComponent("Component "+i);
		     componentRepository.save(component);
		 }
	}

	@Autowired
	private ProjectRepository projectRepository;	

 
	private void createProjects() {
		Hub hub = hubRepository.findByName("Hub 1");	
		Product product = productRepository.findByName("Blanket");
		projectRepository.save(new Project("CLWYD",  1, "Plant moves location", 0, true, "AOS", hub, product));

		projectRepository.save(new Project(
				"Body Blk w\\o No Buffing – ContiTech", 1, "10% in body yield (Ser4), Ser3 - 6%\r\n"
						+ "Cost reduction ~2.5€∕m²\r\n" + "Capacity improvement \r\n" + "",
				0, true, "Yield", hub, product));

		projectRepository.save(new Project("Body Blk w\\o No Buffing – Trelleborg ", 1,
				"ser4: 10% improvement on body Yield,cost reduction ~3.0€∕m². ~6% in ser3", 0, true, "Yield", hub,
				product));

		projectRepository.save(new Project("Gemini3 by Trelleborg",1,
				"Cost reduction ~12.0 €∕m²\r\n" + "and AOS \r\n" + "", 0, true, "Capacity", hub, product));

		projectRepository.save(new Project("SWAN 2.0", 1, "Release  loss", 0, true, "CPP", hub, product));

		projectRepository.save(new Project("Duplex cleaner page color change", 1, "Ink consumption reduction",
				0, true, "CPP", hub, product));

		projectRepository.save(new Project("Ijote", 1, "PSM", 0, true, "CPP", hub, product));

		projectRepository
				.save(new Project("Speedup Gemini 3", 1, "Capacity", 0, true, "Capacity", hub, product));

		projectRepository
				.save(new Project("Speedup Timna 2", 1, "Capacity", 0, true, "Capacity", hub, product));

		projectRepository.save(new Project("ITAC32 mixer", 1, "Capacity", 0, true, "AOS", hub, product));

		projectRepository.save(new Project("ITAC33  mixer",1, "Capacity", 0, true, "AOS", hub, product));

		projectRepository.save(new Project("ER Ser. 4", 1, "D2D,esclations ,QOC,MRB SAP, S&M etc.", 0, true,
				"ER", hub, product));

		projectRepository.save(new Project("ER Ser. 3&2", 1, "D2D,esclations ,QOC,MRB SAP, S&M etc.", 0, true,
				"ER", hub, product));

		projectRepository.save(new Project("NE upgrade phase 2", 2, "", 0, true, "Capacity", hub, product));

		projectRepository.save(new Project("Ser4 additional CPP reduction", 1, "needs brainstorming", 0, true,
				"CPP", hub, product));

		projectRepository.save(new Project("Lab automation", 1, "", 0, true, "Capacity", hub, product));
		projectRepository
				.save(new Project("CSL cure time optimization", 1, "", 0, true, "Capacity", hub, product));
		projectRepository.save(new Project("Xylen free products ", 2, "", 0, true, "Quality", hub, product));
		projectRepository.save(new Project("butterfly elimination", 2, "", 0, true, "Yield", hub, product));
		projectRepository.save(new Project("blanket critical parameters investigation", 2, "", 0, true,
				"Quality", hub, product));
		projectRepository.save(new Project("Gemini 3i –  Keshet release", 1,
				"Negative Dot Gain reduction, PSTB, Release loss", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("Timna 2i –  Keshet release", 1,
				"Negative Dot Gain reduction, PSTB, Release loss", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("Paper lateral movement - SF", 2, "Paper cut marks prevention", 0,
				true, "CPP", hub, product));
		projectRepository.save(new Project("Gemini 3  WP modification", 2,
				"WP modification(Temp, T1,T2) - BLK and PIP LS", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("Electrical Memory Erase", 2, "Negativ memory reduction ", 0, true,
				"CPP", hub, product));

		projectRepository.save(new Project("Wet Nulls voltages correction empty sep. (predicted)", 2,
				"Reduce Ink Background on blanket", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("Print cleaner UI change ", 2,
				"Quick and handy Pribt cleaner usege ", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("ISWAN", 2, "Blanket dirtiness on anti seam, PIP scratches", 0,
				true, "CPP", hub, product));
		projectRepository.save(new Project("2 Dimensions movement - Web", 2, "Negative Dot Gain reduction", 0,
				true, "CPP", hub, product));
		projectRepository.save(new Project("T2 width correction", 2, "Paper cut marks prevention", 0, true,
				"CPP", hub, product));
		projectRepository.save(new Project("Print cleaner UI change", 2,
				"Quick and handy Print cleaner usege ", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("Polaris ", 2, "", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("Ser. 3 CSL 120 ", 2, "cost reduction 1.7 million $ per year", 0,
				true, "CPP", hub, product));
		projectRepository.save(new Project("Ser. 4 CSL 120", 2, "", 0, true, "CPP", hub, product));

		product = productRepository.findByName("INK");
		projectRepository.save(new Project("Ink 4.5S", 1, "", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("Ink 4.5S (+M pigment)", 1, "", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("No marcol to Eilat", 1, "", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("CPP package:\r\n" + "Magenta Pigment-lead\r\n" + "HNVS-support",
				1, "", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("K secondary EOL", 1, "", 0, true, "AOS", hub, product));
		projectRepository.save(new Project("Cyan kneader", 1, "", 0, true, "AOS", hub, product));
		projectRepository.save(new Project("Y EOL secondary", 1, "", 0, true, "AOS", hub, product));
		projectRepository.save(new Project("W12 EOL", 1, "", 0, true, "AOS", hub, product));
		projectRepository.save(new Project("Blue EOL pigment ", 1, "", 0, true, "AOS", hub, product));
		projectRepository.save(new Project("CDM (press)", 1, "", 0, true, "CPP", hub, product));

		projectRepository.save(new Project("Inkformation: Cyan OD drop,background 25% improve all series ", 2,
				"", 0, true, "Quality", hub, product));
		projectRepository.save(new Project("ER tasks( SG, QOC/MRB, SAP/Marketing,escalation  etc)", 1, "", 0,
				true, "ER", hub, product));
		projectRepository.save(new Project("EPIC BID", 1, "", 0, true, "Capacity", hub, product));
		projectRepository.save(new Project("LC/LM without marcol", 2, "", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("Flourcents (6x00)", 2, "", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("UV invisible (7x00)", 2, "", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("white qualifications", 1, "", 0, true, "Capacity", hub, product));
		projectRepository.save(new Project("Maltoze(DIP)", 2, "", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("CTR +100 kg", 1, "", 0, true, "Capacity", hub, product));
		projectRepository.save(new Project("Scale ups(4)", 1, "", 0, true, "Capacity", hub, product));
		projectRepository.save(new Project("ER ser 4 (20000, 30000)", 1, "", 0, true, "ER", hub, product));
		projectRepository.save(new Project("Silver on 7x00", 2, "", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("Ink plant PQ", 3, "", 0, true, "", hub, product));

		product = productRepository.findByName("PIP");
		projectRepository.save(new Project("Spongilla - Ser3 SF", 1, "CPP - reduce PIP scratches", 0, true,
				"NPI", hub, product));
		projectRepository.save(new Project("Spongilla - Ser3  Web", 1, "CPP - reduce PIP scratches", 0, true,
				"NPI", hub, product));
		projectRepository.save(new Project("Overall PIP Automation- \r\n" + "Phase I + Phase II", 1,
				"Cost reduction\r\n" + "Qualify PIP configuration & automation production line ", 0, true, "capacity",
				hub, product));
		projectRepository.save(
				new Project("Cutter #6 (ser4)", 1, "Ser4 Capacity at MCC", 0, true, "AOS", hub, product));
		projectRepository.save(new Project("ER support-Ser2/3 (PIP LS monitoring/QOC/MRB/Customer complaints/Autopsy)",
				1, "Monitor/external projects", 0, true, "ER", hub, product));
		projectRepository.save(new Project("Ser4 transfer (QOC/MRB/production issues)", 1, "Support", 0, true,
				"ER", hub, product));
		projectRepository.save(new Project("PIP Aging Optimization", 1,
				"CPP - Reduce PIP Cracks by using different cooling profile", 0, true, "CPP", hub, product));

		projectRepository.save(new Project("Ser 4 new PUP", 1, "", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("New Wiper blade", 2,
				"CPP - Replace wiper blade material to reduce PIP scratches", 0, true, "NPI", hub, product));
		projectRepository.save(new Project("Customer related CPP (PPG&SY + Israeli customers)", 2,
				"CPP - Support WWTS in LS improvement project", 0, true, "ER", hub, product));
		projectRepository.save(new Project("External Heating power", 2,
				"CPP - identify and calibrate presses with high EH power", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("TK Pilot - MCC", 2,
				"Cost reduction\r\n" + "PIP production at MCC only to Japan", 0, true, "CPP", hub, product));
		projectRepository.save(new Project("Full TK - MCC", 2,
				"Cost reduction\r\n" + "PIP production at MCC only to rest of the world", 0, true, "capacity", hub,
				product));
		projectRepository.save(new Project("Onyx DR", 2, "CPP - Carbon black DR to reduce PIP OPS", 0, true,
				"CPP", hub, product));

		product = productRepository.findByName("BID");
		projectRepository.save(new Project("S3 BID-P AOS Roller", 1, "", 0, true, "AOS", hub, product));
		projectRepository.save(new Project("S3 BID-P Rev.2", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S3 DR Auto Detect", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S3 BID-P Assy Dual source", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S4 BID-60 ER Xfer", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S4 BID-60 ER Rev.4 or Koko", 1, "", 0, true, "", hub, product));

		product = productRepository.findByName("OMP");
		projectRepository.save(new Project("S3 CCR FCO (SF & Web)", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S3 PIP Skew", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S3 Filter IO S3 - AL Filter", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S3 Filter SG S3 20%", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S4 Filters IO Ser. 4", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S4 Filters SG Ser. 4", 1, "", 0, true, "", hub, product));
		projectRepository.save(new Project("S4 CRS", 1, "", 0, true, "", hub, product));
	}

	@Autowired
	private ProductRepository productRepository;

	private void createProducts() {
		productRepository.save(new Product("BID"));
		productRepository.save(new Product("PIP"));
		productRepository.save(new Product("INK"));
		productRepository.save(new Product("BKT"));
		productRepository.save(new Product("OMP"));
		productRepository.save(new Product("Blanket"));

	}

}
