import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorroBookComponent } from './borro-book.component';

describe('BorroBookComponent', () => {
  let component: BorroBookComponent;
  let fixture: ComponentFixture<BorroBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorroBookComponent]
    });
    fixture = TestBed.createComponent(BorroBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
