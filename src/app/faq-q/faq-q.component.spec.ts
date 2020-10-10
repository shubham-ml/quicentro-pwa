import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqQComponent } from './faq-q.component';

describe('FaqQComponent', () => {
  let component: FaqQComponent;
  let fixture: ComponentFixture<FaqQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
