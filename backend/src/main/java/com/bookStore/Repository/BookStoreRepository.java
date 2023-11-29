package com.bookStore.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookStore.Entity.BookStore;

@Repository
public interface BookStoreRepository extends JpaRepository<BookStore, Integer> {

}
