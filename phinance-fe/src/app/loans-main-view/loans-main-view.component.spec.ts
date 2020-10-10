import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansMainViewComponent } from './loans-main-view.component';

describe('LoansMainViewComponent', () => {
  let component: LoansMainViewComponent;
  let fixture: ComponentFixture<LoansMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
