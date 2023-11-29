package com.bookStore.Service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.bookStore.Entity.BookStore;

@Service
public interface bookStoreService {

	public BookStore addBook(BookStore book);

	public Optional<BookStore> updateBookStore(int id, BookStore bookStore);

	public String delete(int id);

	public List<BookStore> getAll();

	public BookStore getById(int id);

}
