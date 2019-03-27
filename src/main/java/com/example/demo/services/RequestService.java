package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.RequestDTO;
import com.example.demo.entities.Press;
import com.example.demo.entities.Request;
import com.example.demo.entities.RequestComponent;
import com.example.demo.entities.RequestMedia;
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
	private RequestMediaService requestMediaService;
	
	public List<Request> getAllRequest(){
		 ArrayList<Request> requests= new ArrayList<Request>();
		 Iterator<Request> itr=requestRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 requests.add((Request)itr.next());
		 }
		 return requests;
	}
	
	public Request getRequest(long id) {
		return requestRepository.findById(id) ;
	}
	
	public void addRequest(RequestDTO requestDto) {
		Request request=new Request();
		request.setArgent(requestDto.isArgent());
		request.setComment(requestDto.getComment());
		request.setConsecutive(requestDto.isConsecutive());
		request.setDescription(requestDto.getDescription());
		request.setWeekNumber(requestDto.getWeekNumber());
		request.setShiftsLength(requestDto.getShiftsLength());
		request.setCreated(requestDto.getCreated());
		request.setStatus(requestDto.getStatus());
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
		
		List<RequestComponent> requestComponent=new ArrayList<RequestComponent>();
		for(long id:requestDto.getComponents()) {
			requestComponent.add(requestComponentService.getRequestComponent(id));
		}
		request.setComponents(requestComponent);
		
		List<Press> presses=new ArrayList<Press>();
		for(long id:requestDto.getPresses()) {
 			presses.add(pressService.getPress(id));
		}
		request.setPresses(presses);
		
		List<RequestMedia> requestMedia=new ArrayList<RequestMedia>();
		for(long id:requestDto.getMedia()) {
			requestMedia.add(requestMediaService.getRequestMedia(id));
		}
		request.setMedia(requestMedia);
		
		requestRepository.save(request);
	}
	public void updateRequest(Request request) {
		requestRepository.save(request);
	}

	
	public void deleteRequest(long id) {
		requestRepository.deleteById(id);
	}



}
