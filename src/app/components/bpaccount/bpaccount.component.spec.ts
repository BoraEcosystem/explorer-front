import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpaccountComponent } from './bpaccount.component';

describe('BpaccountComponent', () => {
  let component: BpaccountComponent;
  let fixture: ComponentFixture<BpaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
