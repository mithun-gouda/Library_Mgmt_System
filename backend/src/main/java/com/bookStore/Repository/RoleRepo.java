package com.bookStore.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookStore.Entity.Role;

public interface RoleRepo extends JpaRepository<Role, Integer> {

}
