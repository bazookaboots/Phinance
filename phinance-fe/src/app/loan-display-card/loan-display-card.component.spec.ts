import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisplayCardComponent } from './loan-display-card.component';

describe('LoanDisplayCardComponent', () => {
  let component: LoanDisplayCardComponent;
  let fixture: ComponentFixture<LoanDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDisplayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
