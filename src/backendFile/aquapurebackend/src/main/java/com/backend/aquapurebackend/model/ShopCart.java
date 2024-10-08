package com.backend.aquapurebackend.model;
import java.io.Serializable;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.*;


@Entity
@Table(name = "shop_cart")
@EntityListeners(AuditingEntityListener.class)
public class ShopCart implements Serializable {
    private static final long serialVersionUID = 1L;
	@Id
	@Column(unique=true)
	int id;
	@Column(unique = false)
	int userid;
	
	int product_id;
	
	int quantity;
	
	public ShopCart(){
		super();
	}
	
	public ShopCart(int id, int userid, int product_id, int quantity) {
		super();
		this.id = id;
		this.userid = userid;
		this.product_id = product_id;
		this.quantity = quantity;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	
	public int getquantity() {
		return quantity;
	}
	
	public void setquantity(int quant) {
		this.quantity = quant;
	}

}
