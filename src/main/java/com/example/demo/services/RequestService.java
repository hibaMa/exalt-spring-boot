package com.example.demo.services;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.RequestDTO;
import com.example.demo.entities.MediaTypes;
import com.example.demo.entities.Press;
import com.example.demo.entities.Request;
import com.example.demo.entities.RequestComponent;
import com.example.demo.repository.RequestRepository;

@Service
public class RequestService {

	@Autowired
	private RequestRepository requestRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private RejectedDetailsService rejectedDetailsService;
	@Autowired
	private ProjectService projectService;
	@Autowired
	private ProductService productService;
	@Autowired
	private HubService hubService;
	@Autowired
	private RequestComponentService requestComponentService;
	@Autowired
	private PressService pressService;
	@Autowired
	private MediaTypeService mediaTypeService;
	 

	public List<Request> getAllRequest() {
		ArrayList<Request> requests = new ArrayList<Request>();
		Iterator<Request> itr = requestRepository.findAll().iterator();
		while (itr.hasNext()) {
			requests.add((Request) itr.next());
		}
		return requests;
	}

	public Request getRequest(long id) {
		return requestRepository.findById(id);
	}

	public void addRequest(RequestDTO requestDto) {
		Request request = new Request();
		request.setUrgent(requestDto.isUrgent());
		request.setComment(requestDto.getComment());
		request.setConsecutive(requestDto.isConsecutive());
		request.setDescription(requestDto.getDescription());
		request.setWeekNumber(requestDto.getWeekNumber());
		request.setShiftsLength(requestDto.getShiftsLength());
		
		
		ZonedDateTime zdt = ZonedDateTime.now();
		request.setCreated(zdt.format(DateTimeFormatter.ISO_INSTANT));
	
//		Instant instant = Instant.now();
//		request.setCreated(DateTimeFormatter.ISO_INSTANT.format(instant));
		
		request.setStatus("PENDING");
		
		request.setTestFileType(requestDto.getTestFileType()); 
		request.setComment(requestDto.getComment());
		request.setTestObjecteves(requestDto.getTestObjecteves());
		request.setType(requestDto.getType());
		request.setPriority(requestDto.getPriority());
		request.setName(requestDto.getName());

		request.setProject(projectService.getProject(requestDto.getProject()));
		request.setOwner(userService.getUser(requestDto.getOwner()));
		request.setRejectedDetails(rejectedDetailsService.getRejectedDetails(requestDto.getRejectedDetails()));
		request.setProduct(productService.getProduct(requestDto.getProduct()));
		request.setHub(hubService.getHub(requestDto.getHub()));

		List<RequestComponent> requestComponent = new ArrayList<RequestComponent>();
		int[] submitCompQuantity = requestDto.getSubmitCompQuantity();
		for (int i = 0; i < requestDto.getComponents().length; i++) {
			RequestComponent comp = requestComponentService.getRequestComponent(requestDto.getComponents()[i]);
			comp.setQuantity(submitCompQuantity[i]);
			requestComponent.add(comp);
		}

		request.setComponents(requestComponent);

		List<Press> presses = new ArrayList<Press>();
		for (long id : requestDto.getPresses()) {
			presses.add(pressService.getPress(id));
		}
		request.setPresses(presses);

		List<MediaTypes> mediaTypesList=new ArrayList<MediaTypes>();
		int[] submitMediaQuantity = requestDto.getSubmitMediaQuantity();
		long[] mediaTypesID= requestDto.getMediaTypes();
		for (int i = 0; i < mediaTypesID.length; i++) {
			MediaTypes mediaType = mediaTypeService.getmediaType(mediaTypesID[i]) ;
			mediaType.getMedia().setQuantity(submitMediaQuantity[i]);
			mediaTypesList.add(mediaType);
		}

		request.setMediaTypes(mediaTypesList);

		requestRepository.save(request);
	}

	public void updateRequest(Request request) {
		requestRepository.save(request);
	}

	public void deleteRequest(long id) {
		requestRepository.deleteById(id);
	}

}
