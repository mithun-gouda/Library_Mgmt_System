import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStudentComponent } from './component-student.component';

describe('ComponentStudentComponent', () => {
  let component: ComponentStudentComponent;
  let fixture: ComponentFixture<ComponentStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentStudentComponent]
    });
    fixture = TestBed.createComponent(ComponentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
