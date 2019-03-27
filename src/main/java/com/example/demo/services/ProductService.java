package com.example.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;	
	
	public List<Product> getAllProducts(){
		 ArrayList<Product> Products= new ArrayList<Product>();
		 Iterator<Product> itr=productRepository.findAll().iterator();
		 while(itr.hasNext()) {
			 Products.add((Product)itr.next());
		 }
		 return Products;
	}
	
	public Product getProduct(long id) {
		return productRepository.findById(id);
	}
	
	public void addProduct(Product product) {
		productRepository.save(product);
	}
	
	public void updateProduct(Product product) {
		productRepository.save(product);
	}

	
	public void deleteProduct(long id) {
		productRepository.deleteById(id);
	}



}
