package com.backend.aquapurebackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.aquapurebackend.dto.ShopProductPostDTO;
//import com.AquaPure.Shop.dto.UserPostDTO;
import com.backend.aquapurebackend.model.ShopProduct;
import com.backend.aquapurebackend.service.ShopProductService;

@CrossOrigin
@RestController

public class ShopProduct_Controller {
    @Autowired
    ShopProductService productService;

    // ToDo: Implement GET /user
    @GetMapping("/product")
    public List<ShopProduct> get_product() {
        return productService.getProducts();

    }

    // ToDo: Implement POST /user
    @PostMapping("/product")
    public ResponseEntity<Optional<ShopProduct>> addProduct(@RequestBody ShopProductPostDTO newProductDTO) {

        if (newProductDTO.getProduct_name() == null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }

        ShopProduct newProduct = new ShopProduct(productService.incCurrentID(), newProductDTO.getProduct_name(),
                newProductDTO.getProduct_price(), newProductDTO.getProduct_desc(), newProductDTO.getCatagoryID());
        productService.addProduct(newProduct);
        return new ResponseEntity<>(Optional.ofNullable(newProduct), HttpStatus.CREATED);
        // Otherwise create new user from newUserDTO's attributes,
        // Add the user through UserService
        // Return response entity with the new user and CREATED status
    }

    // Implement GET /user/{id}
    // You will need to use @PathVariable annotation
    @GetMapping("/product/{id}")
    public Optional<ShopProduct> getProductById(@PathVariable(value = "id") Long Id) {
        return Optional.ofNullable(productService.findByID(Id));
    }

    // Implement DELETE /user{id}
    @DeleteMapping("/product/{id}")
    public String deleteProduct(@PathVariable(value = "id") Long Id) {
        if (productService.deleteProduct(Id) == true) {
            return "product Deleted";
        }
        return "Delete error";
    }

}
