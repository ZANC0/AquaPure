package com.backend.aquapurebackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.aquapurebackend.dto.ShopPurchasePostDTO;
import com.backend.aquapurebackend.model.ShopPurchase;
import com.backend.aquapurebackend.service.ShopPurchaseService;

import org.springframework.http.HttpStatus;

@CrossOrigin("http://localhost:3000")
@RestController
public class ShopPurchase_Controller {
    @Autowired
    ShopPurchaseService purchaseService;

    @GetMapping("/history")
    public List<ShopPurchase> get_purchase() {
        return purchaseService.getHistory();

    }

    // get by id
    @GetMapping("/history/{id}")
    public Optional<ShopPurchase> getPurchaseByID(@PathVariable(value = "id") Long Id) {
        return purchaseService.findByID(Id);
    }
    @GetMapping("/history/user/{userid}")
    public List<ShopPurchase> getUserByID(@PathVariable(value = "userid")Long userID){
        return purchaseService.findByUserID(userID);
    }

    @PostMapping("/history")
    public ResponseEntity<Optional<ShopPurchase>> addPurchase(@RequestBody ShopPurchasePostDTO newPurchaseDTO){
        ShopPurchase purchase = new ShopPurchase(newPurchaseDTO.getPurchase_id(),newPurchaseDTO.getUser_id(),newPurchaseDTO.getProduct_id(), newPurchaseDTO.getQuantity(), newPurchaseDTO.getDate());
        purchaseService.add_Purchase(purchase);
        return new ResponseEntity<>(Optional.ofNullable(purchase), HttpStatus.CREATED);
    }

    @DeleteMapping("/history/{id}")
    public String deletePurchase(@PathVariable(value = "id") int Id) {
        purchaseService.deletePurchase(Id);
        return ("purchase removed from history, no refund");

    }
}