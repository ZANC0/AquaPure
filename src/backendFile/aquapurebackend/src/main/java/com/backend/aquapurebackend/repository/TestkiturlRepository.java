package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.Testkiturl;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface TestkiturlRepository extends JpaRepository<Testkiturl, Long> {

    @SuppressWarnings("null")
    List<Testkiturl> findAll();
}
