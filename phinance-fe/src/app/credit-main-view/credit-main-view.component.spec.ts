import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMainViewComponent } from './credit-main-view.component';

describe('CreditMainViewComponent', () => {
  let component: CreditMainViewComponent;
  let fixture: ComponentFixture<CreditMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
