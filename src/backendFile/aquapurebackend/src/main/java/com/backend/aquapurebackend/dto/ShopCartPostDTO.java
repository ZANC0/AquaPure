package com.backend.aquapurebackend.dto;


public class ShopCartPostDTO {
    Long id;
	Long userid;
	Long product_id;
	int quantity;
	
	public ShopCartPostDTO(Long id, Long userid, Long product_id, int quantity) {
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
