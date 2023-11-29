package com.bookStore.Service;

import org.springframework.stereotype.Service;

import com.bookStore.Entity.OtpValidation;
import com.bookStore.Repository.OtpRepo;

import java.util.HashMap;
import java.util.Map;

@Service
public class OtpService {
	
    private final OtpRepo otpRepo;

    public OtpService(OtpRepo otpRepo) {
        this.otpRepo = otpRepo;
    }
   
    private Map<String, String> otpStorage = new HashMap<>();

    public String generateOtp() {
        int min = 100000;  
        int max = 999999; 
        int otp = (int) (Math.random() * (max - min + 1)) + min;
        System.out.println(">>>"+otp);
        return String.valueOf(otp);
    }


    public void storeOtp(String email, String otp) {
        otpStorage.put(email, otp);
    }

    public String getStoredOtp(String email) {
        return otpStorage.get(email);
    }

    public String findOtpByMailId(String mailId) {
        OtpValidation otpValidation = otpRepo.findByMailId(mailId);
        if (otpValidation != null) {
            return otpValidation.getOtp();
        }
        else{
            return null; // Return null if the email is not found
        }

    }
    
    
}
