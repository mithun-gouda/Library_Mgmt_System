package com.bookStore.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.Entity.BookStore;
import com.bookStore.Entity.Borrow;
import com.bookStore.Entity.User;
import com.bookStore.Repository.BookStoreRepository;
import com.bookStore.Repository.BorrowRepository;
import com.bookStore.Repository.UserRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/borrow")
public class BorrowController {
	@Autowired
	private BorrowRepository borrowRepository;
	@Autowired
	private UserRepo userrepo;

	@Autowired
	private BookStoreRepository booksRepository;

	@PostMapping("/borrowBook")
	public String borrowBook(@RequestBody Borrow borrow) {
		// System.out.println(borrow);

		try {
			User user = userrepo.findById(borrow.getUserId()).orElse(null);

			if (user == null) {
				return "User with ID " + borrow.getUserId() + " not found!";
			}

			BookStore books = booksRepository.findById(borrow.getBookId()).orElse(null);

			if (books == null) {
				return "The book with ID " + borrow.getBookId() + " is not available!";
			}

			if (!books.isAvailable()) {
				return "The book \"" + books.getName() + "\" is out of stock!";
			} else {
//            	Save the details in DB
				Borrow b = new Borrow();
				b.setBookId(borrow.getBookId());
				b.setUserId(borrow.getUserId());
				borrowRepository.save(b);
				return "Successfully borrowed the book: " + books.getName();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@GetMapping
	public List<Borrow> getAllBorrow() {
		return borrowRepository.findAll();
	}

	@PutMapping("/borrowBook/{Id}")
	public Borrow returnBook1(@RequestBody Borrow borrow) {
		Borrow borrowBook = borrowRepository.findById(borrow.getBorrowId()).get();
		BookStore book = new BookStore();

		book.returnBook();
		booksRepository.save(book);
//       @SuppressWarnings("deprecation")
//	Date currentDate = new Date(0, 0, 0);
//       borrowBook.setReturnDate(currentDate);
		return borrowRepository.save(borrowBook);
	}

	@GetMapping("user/{Id}")
	public List<Borrow> booksBorrowedByUser(@PathVariable Integer Id) {
		return borrowRepository.findByUserId(Id);
	}

	@GetMapping("bookId/{Id}")
	public List<BookStore> bookBorrowHistory(@PathVariable Integer Id) {
		Optional<BookStore> bookstoreOptional = booksRepository.findById(Id);

		if (bookstoreOptional.isPresent()) {
			BookStore bookStore = bookstoreOptional.get();
			bookStore.setAvailable(false);
			booksRepository.save(bookStore);
		}

		return booksRepository.findAll();
	}

	@GetMapping("/returnBooking/{Id}")
	public List<BookStore> returnBook(@PathVariable Integer Id) {
		Optional<BookStore> bookstoreOptional = booksRepository.findById(Id);
		System.out.println("returnBook" + Id);
		if (bookstoreOptional.isPresent()) {
			BookStore bookStore = bookstoreOptional.get();
			bookStore.setAvailable(true);
			booksRepository.save(bookStore);
		}

		return booksRepository.findAll();
	}

	@GetMapping("/borrowBook/{Id}")
	public List<Borrow> borrowBook(@PathVariable Integer Id) {

		return borrowRepository.findByBorrowId(Id);
	}

}
