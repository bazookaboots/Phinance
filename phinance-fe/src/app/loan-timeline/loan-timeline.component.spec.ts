import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTimelineComponent } from './loan-timeline.component';

describe('LoanTimelineComponent', () => {
  let component: LoanTimelineComponent;
  let fixture: ComponentFixture<LoanTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
