package com.example.demo.controllers;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

@RestController
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@RequestMapping("/api/v1/product")
	public List<Product> getAllProduct(){
		return productService.getAllProducts();
	}
	
	@RequestMapping("/api/v1/Product/all/{id}")
	public Product getProduct(@PathVariable String id) {
		 return productService.getProduct(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/api/v1/product")
	public void addProduct(@RequestBody Product product) {
		productService.addProduct(product);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/api/v1/product/modify")
	public void updateProduct(@RequestBody Product product) {
		productService.updateProduct(product);
	}

	@RequestMapping(method=RequestMethod.DELETE,value="/api/v1/product/{id}")
	public void deleteProduct(@PathVariable String id) {
		productService.deleteProduct(id);
 	}

}
