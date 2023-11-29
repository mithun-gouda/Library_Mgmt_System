import { TestBed } from '@angular/core/testing';
import { BorrowService } from './borrow-service.service';



describe('BorrowServiceService', () => {
  let service: BorrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
