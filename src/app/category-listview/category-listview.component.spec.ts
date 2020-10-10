import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListviewComponent } from './category-listview.component';

describe('CategoryListviewComponent', () => {
  let component: CategoryListviewComponent;
  let fixture: ComponentFixture<CategoryListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
