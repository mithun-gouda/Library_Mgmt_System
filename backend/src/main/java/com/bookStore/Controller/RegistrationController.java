package com.bookStore.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.Entity.OtpValidation;
import com.bookStore.Entity.Role;
import com.bookStore.Entity.User;
import com.bookStore.Repository.OtpRepo;
import com.bookStore.Repository.RoleRepo;
import com.bookStore.Repository.UserRepo;
import com.bookStore.Service.MailService;
import com.bookStore.Service.OtpService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/registration")
public class RegistrationController {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private RoleRepo roleRepo;

	@Autowired
	private MailService mailService;

	@Autowired
	private OtpService otpService;

	@Autowired
	private OtpRepo otpRepo;

	@PostMapping("/send-otp")
	public ResponseEntity<String> sendOtpEmail(@RequestParam(value = "email") String email) {
		String otp = otpService.generateOtp();
		otpService.storeOtp(email, otp);

		OtpValidation OtpValidation = new OtpValidation();
		OtpValidation.setMailId(email);
		OtpValidation.setOtp(otp);

		otpRepo.save(OtpValidation);
		try {
			mailService.sendOtpEmail(email, otp);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return ResponseEntity.ok("OTP sent successfully");
	}

	@PostMapping("/register")
	public ResponseEntity<String> User(@RequestBody User user) {
		System.out.println(user);
		String otpDb = otpService.findOtpByMailId(user.getMailId());

		if (otpDb.equals(user.getOtp())) {
			userRepo.save(user);
			return new ResponseEntity<>("User Register Successfully.", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("User Not Register.", HttpStatus.OK);
		}
	}

	@PostMapping("/login")
	public ResponseEntity<User> loginUser(@RequestBody User userData) {
		System.out.println(userData);
		User user = userRepo.findByUsername(userData.getUsername());

		if (user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
		return ResponseEntity.internalServerError().body(user);
	}

	@GetMapping("/roles")
	public ResponseEntity<List<Role>> getRoles() {
		List<Role> roles = roleRepo.findAll();
		return new ResponseEntity<List<Role>>(roles, HttpStatus.OK);
	}

	@GetMapping("/users")
	public ResponseEntity<List<User>> getUsers() {
		List<User> users = userRepo.findAll();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}

}
