package com.example.demo.controllers;
import java.io.IOException;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestWebController {
  
    @GetMapping(value = "/api/image/S4SF.png")
    public ResponseEntity<InputStreamResource> getImage() throws IOException {
 
        ClassPathResource imgFile = new ClassPathResource("image/S4SF.png");
 
        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(new InputStreamResource(imgFile.getInputStream()));
    }
    
    
}