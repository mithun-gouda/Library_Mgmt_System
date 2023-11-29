package com.bookStore.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookStore.Entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
	public User findByUsername(String username);
}
