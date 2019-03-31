package com.example.demo.controllers;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.RunService;
@RestController
public class RunServiceController {
	
	
	@Autowired
	RunService runService;
	
	@RequestMapping("/fillData")
	public void fillData() {
		try {
			runService.fillData();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}
}
