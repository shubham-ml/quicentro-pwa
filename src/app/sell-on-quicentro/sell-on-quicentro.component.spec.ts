import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOnQuicentroComponent } from './sell-on-quicentro.component';

describe('SellOnQuicentroComponent', () => {
  let component: SellOnQuicentroComponent;
  let fixture: ComponentFixture<SellOnQuicentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellOnQuicentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOnQuicentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
