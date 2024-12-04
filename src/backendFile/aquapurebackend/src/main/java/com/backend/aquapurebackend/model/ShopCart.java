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
	Long id;
	@Column(unique = false)
	Long userid;
	
	Long product_id;
	
	int quantity;
	
	public ShopCart(){
		super();
	}
	
	public ShopCart(Long id, Long userid, Long product_id, int quantity) {
		super();
		this.id = id;
		this.userid = userid;
		this.product_id = product_id;
		this.quantity = quantity;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserid() {
		return userid;
	}

	public void setUserid(Long userid) {
		this.userid = userid;
	}

	public Long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Long product_id) {
		this.product_id = product_id;
	}
	
	public int getquantity() {
		return quantity;
	}
	
	public void setquantity(int quant) {
		this.quantity = quant;
	}

}
