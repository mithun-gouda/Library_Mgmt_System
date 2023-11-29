package com.bookStore.Service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Service
public class MailService 
{
	    private JavaMailSender javaMailSender;
	    
	    public MailService(JavaMailSender javaMailSender) {
	    	this.javaMailSender = javaMailSender;
	    }
	    
	    public void sendOtpEmail(String to, String otp) throws Exception  {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(to);
	        message.setSubject("Your OTP Code");
	        message.setText("Your OTP code is: " + otp);

	        javaMailSender.send(message);
	    }
}
