package com.bookStore.Entity;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Borrow {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer borrowId;

	Integer bookId;
	Long userId;

	public Integer getBorrowId() {
		return borrowId;
	}

	public void setBorrowId(Integer borrowId) {
		this.borrowId = borrowId;
	}

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Borrow() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Borrow(Integer borrowId, Integer bookId, Long userId) {
		super();
		this.borrowId = borrowId;
		this.bookId = bookId;
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Borrow [borrowId=" + borrowId + ", bookId=" + bookId + ", userId=" + userId + "]";
	}

	public void setReturnDate(Date currentDate) {
		// TODO Auto-generated method stub

	}

	public void setIssueDate(Date currentDate) {
		// TODO Auto-generated method stub

	}

	public void setDueDate(java.util.Date overdueDate) {
		// TODO Auto-generated method stub

	}

}
