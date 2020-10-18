import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansTimelineComponent } from './loans-timeline.component';

describe('LoansTimelineComponent', () => {
  let component: LoansTimelineComponent;
  let fixture: ComponentFixture<LoansTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
