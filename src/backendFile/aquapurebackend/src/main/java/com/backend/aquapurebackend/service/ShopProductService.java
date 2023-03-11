package com.backend.aquapurebackend.ervice;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.aquapurebackend.model.ShopProduct;
import com.backend.aquapurebackend.repository.ShopProductRepository;



@Service
public class ShopProductService {
    @Autowired
	ShopProductRepository shop_productRep;
	
	static List <ShopProduct> productList;
	int currentID;

	public ShopProductService() {
		super();
	}
	

	public List<ShopProduct> getProducts(){
		return(List<ShopProduct>) shop_productRep.findAll();
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
	
	public void addProduct(ShopProduct newProduct) {
		productList.add(newProduct);
	}
	
	public ShopProduct findByID(int id) {
		 Iterator<ShopProduct> it = productList.iterator();
		 while (it.hasNext()) {
            ShopProduct product = it.next();
			 if (product.getProductID() == id) {
				 return product;			 	
			 }
		 }
		return null;
	}
	
	public boolean deleteProduct(int id) {
		ShopProduct product = findByID(id);
		return productList.remove(product);
	}

}
