package com.bookStore.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.Entity.BookStore;
import com.bookStore.Service.bookStoreService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/library")

public class BookStoreController {

	@Autowired
	private bookStoreService bookservice;

	@GetMapping("/home")
	public String homepage() {
		return "welcome to home";
	}

	@PostMapping("/add")
	public ResponseEntity<BookStore> addBook(@RequestBody BookStore books) {
		BookStore b = bookservice.addBook(books);
		return new ResponseEntity<BookStore>(b, HttpStatus.CREATED);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Optional<BookStore>> updateBooks(@PathVariable(value = "id") int id,
			@RequestBody BookStore books) {
		Optional<BookStore> b = bookservice.updateBookStore(id, books);
		return new ResponseEntity<Optional<BookStore>>(b, HttpStatus.ACCEPTED);

	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable int id) {
		bookservice.delete(id);
		String msg = ("Deleted Successfully");
		return new ResponseEntity<String>(msg, HttpStatus.ACCEPTED);
	}

	@GetMapping("/all")
	public ResponseEntity<List<BookStore>> getBooks() {
		List<BookStore> b = bookservice.getAll();
		return new ResponseEntity<List<BookStore>>(b, HttpStatus.ACCEPTED);

	}

	@GetMapping("/book/{id}")
	public ResponseEntity<BookStore> getBooks(@PathVariable int id) {
		BookStore book = (BookStore) bookservice.getById(id);
//			return new ResponseEntity(book,HttpStatus.ACCEPTED);
		if (book != null) {
			return new ResponseEntity<>(book, HttpStatus.OK); // Book found, return with status 200 OK
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Book not found, return with status 404 Not Found
		}
	}

}
