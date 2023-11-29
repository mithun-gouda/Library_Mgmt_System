package com.bookStore.Service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookStore.Entity.BookStore;
import com.bookStore.Entity.User;
import com.bookStore.Repository.BookStoreRepository;
import com.bookStore.Repository.UserRepo;

import io.micrometer.common.util.StringUtils;

@Service
public class ServiceImp implements bookStoreService {

	@Autowired
	private BookStoreRepository bookStoreRepository;

	@Override
	public BookStore addBook(BookStore book) {
		BookStore b = bookStoreRepository.save(book);
		return b;
	}

	@Override
	public Optional<BookStore> updateBookStore(int id, BookStore bookStore) {
		Optional<BookStore> b = bookStoreRepository.findById(id);
		if (b.isPresent()) {
			if (StringUtils.isNotBlank(bookStore.getName())) {
				b.get().setName(bookStore.getName());
			}
			if (StringUtils.isNotBlank(bookStore.getAuthor())) {
				b.get().setAuthor(bookStore.getAuthor());
			}
			if (bookStore.getPrice() != 0) {
				b.get().setPrice(bookStore.getPrice());
			}
			bookStoreRepository.save(b.get());
			return b;
		} else {
			return b;
		}
	}

	@Override
	public String delete(int id) {
		bookStoreRepository.deleteById(id);
		return "Data Deleted Successfully";
	}

	@Override
	public List<BookStore> getAll() {
		List<BookStore> b = bookStoreRepository.findAll();
		return b;
	}

	@Override
	public BookStore getById(int id) {
		Optional<BookStore> b = bookStoreRepository.findById(id);
		if (b.isPresent()) {
			return b.get();
		} else {
			return null;
		}
	}

}
