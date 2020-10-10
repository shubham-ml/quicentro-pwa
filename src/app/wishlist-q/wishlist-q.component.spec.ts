import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistQComponent } from './wishlist-q.component';

describe('WishlistQComponent', () => {
  let component: WishlistQComponent;
  let fixture: ComponentFixture<WishlistQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
