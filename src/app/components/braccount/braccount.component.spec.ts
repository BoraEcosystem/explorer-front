import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraccountComponent } from './braccount.component';

describe('BraccountComponent', () => {
  let component: BraccountComponent;
  let fixture: ComponentFixture<BraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
