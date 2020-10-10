import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAndExchangeComponent } from './return-and-exchange.component';

describe('ReturnAndExchangeComponent', () => {
  let component: ReturnAndExchangeComponent;
  let fixture: ComponentFixture<ReturnAndExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnAndExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnAndExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
