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
	Long productID;
	
	
	String product_name;
	
	
	double product_price;
	
	
	String product_desc;
	
	
	Long catagoryID;
	
	
	public ShopProduct() {
		super();
	}
	
	public ShopProduct(Long productID, String product_name, double product_price, String product_desc, Long catagoryID) {
		super();
		this.productID = productID;
		this.product_name = product_name;
		this.product_price = product_price;
		this.product_desc = product_desc;
		this.catagoryID = catagoryID;
	}
	

	
	public Long getProductID() {
		return productID;
	}

	public void setProductID(Long productID) {
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

	public Long getCatagoryID() {
		return catagoryID;
	}

	public void setCatagoryID(Long catagoryID) {
		this.catagoryID = catagoryID;
	}

}
