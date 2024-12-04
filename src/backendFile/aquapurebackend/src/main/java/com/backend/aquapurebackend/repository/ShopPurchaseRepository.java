package com.backend.aquapurebackend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.backend.aquapurebackend.model.ShopPurchase;

public interface ShopPurchaseRepository extends CrudRepository<ShopPurchase,Long>{
    List<ShopPurchase> findByUserid(Long userid);
}
