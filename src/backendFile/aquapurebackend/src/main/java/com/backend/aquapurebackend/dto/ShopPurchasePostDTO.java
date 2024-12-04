package com.backend.aquapurebackend.dto;

public class ShopPurchasePostDTO {
    Long purchase_id;
    Long userid;
    Long product_id;
    int quantity;
    String date;
    public ShopPurchasePostDTO(Long purchase_id, Long userid, Long product_id, int quantity, String date){
        this.purchase_id = purchase_id;
        this.userid = userid;
        this.product_id = product_id;
        this.quantity = quantity;
        this.date = date;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public Long getPurchase_id() {
        return purchase_id;
    }
    public void setPurchase_id(Long purchase_id) {
        this.purchase_id = purchase_id;
    }
    public Long getUser_id() {
        return userid;
    }
    public void setUser_id(Long userid) {
        this.userid = userid;
    }
    public Long getProduct_id() {
        return product_id;
    }
    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

}
