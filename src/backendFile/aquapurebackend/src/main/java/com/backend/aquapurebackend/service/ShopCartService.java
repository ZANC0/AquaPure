package com.backend.aquapurebackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.aquapurebackend.model.ShopCart;
import com.backend.aquapurebackend.repository.ShopCartRepository;

@Service
public class ShopCartService {
	@Autowired
	ShopCartRepository cartRepository;

	static List<ShopCart> itemList;
	int currentID;

	public ShopCartService() {
		super();
	}

	public List<ShopCart> getItems() {
		return (List<ShopCart>) cartRepository.findAll();
	}

	public int getCurrentID() {
		return currentID;
	}

	public void setCurrentID(int currentID) {
		this.currentID = currentID;
	}

	public int incCurrentID() {
		currentID += 1;
		return currentID;
	}

	public void addItems(ShopCart newItem) {
		cartRepository.save(newItem);
	}
	public Optional<ShopCart> findByID(int id){
		return cartRepository.findById((long) id);
	}
	public List<ShopCart> findByUserID(Long userid){
		return cartRepository.findByUserid(userid);
	}
	public void deleteItem(int id) {
		cartRepository.deleteById((long) id);
	}
	public void deleteCart(Long userid){
		cartRepository.deleteByUserid(userid);
	}
	
	
	

}
