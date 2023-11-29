package com.bookStore.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookStore.Entity.Borrow;

@Repository
public interface BorrowRepository extends JpaRepository<Borrow, Integer> {

	List<Borrow> findByUserId(Integer userId);

	List<Borrow> findByBookId(Integer bookId);

	List<Borrow> findByBorrowId(Integer borrowId);

}
