import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrtransactionComponent } from './brtransaction.component';

describe('BrtransactionComponent', () => {
  let component: BrtransactionComponent;
  let fixture: ComponentFixture<BrtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
