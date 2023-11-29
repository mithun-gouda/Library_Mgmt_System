package com.bookStore.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookStore.Entity.OtpValidation;

public interface OtpRepo extends JpaRepository<OtpValidation, Integer> {

	OtpValidation findByMailId(String mailId);

}
