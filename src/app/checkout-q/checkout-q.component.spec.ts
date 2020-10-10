import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutQComponent } from './checkout-q.component';

describe('CheckoutQComponent', () => {
  let component: CheckoutQComponent;
  let fixture: ComponentFixture<CheckoutQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
