package com.backend.aquapurebackend.model;
import java.io.Serializable;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "shop_product")
@EntityListeners(AuditingEntityListener.class)
public class ShopProduct implements Serializable {
    private static final long serialVersionUID = 1L;
	@Id
	@Column(unique=true)
	int productID;
	
	
	String product_name;
	
	
	double product_price;
	
	
	String product_desc;
	
	
	int catagoryID;
	
	
	public ShopProduct() {
		super();
	}
	
	public ShopProduct(int productID, String product_name, double product_price, String product_desc, int catagoryID) {
		super();
		this.productID = productID;
		this.product_name = product_name;
		this.product_price = product_price;
		this.product_desc = product_desc;
		this.catagoryID = catagoryID;
	}
	

	
	public int getProductID() {
		return productID;
	}

	public void setProductID(int productID) {
		this.productID = productID;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public double getProduct_price() {
		return product_price;
	}

	public void setProduct_price(double product_price) {
		this.product_price = product_price;
	}

	public String getProduct_desc() {
		return product_desc;
	}

	public void setProduct_desc(String product_desc) {
		this.product_desc = product_desc;
	}

	public int getCatagoryID() {
		return catagoryID;
	}

	public void setCatagoryID(int catagoryID) {
		this.catagoryID = catagoryID;
	}

}
