package com.backend.aquapurebackend.model;
import java.io.Serializable;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.*;

@Entity
@Table(name = "scores")
@EntityListeners(AuditingEntityListener.class)
public class ShopPoints implements Serializable {
    private static final long serialVersionUID = 1L;
	@Id
	@Column(unique=true)
	Long user_ID;
	int score;
	String email;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public ShopPoints() {
		super();
	}
	public ShopPoints(Long user_ID, int score) {
		super();
		this.user_ID = user_ID;
		this.score = score;
	}
	public Long getUser_ID() {
		return user_ID;
	}
	public void setUser_ID(Long user_ID) {
		this.user_ID = user_ID;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	

}
