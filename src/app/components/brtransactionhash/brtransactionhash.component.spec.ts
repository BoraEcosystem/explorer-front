import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrtransactionhashComponent } from './brtransactionhash.component';

describe('BrtransactionhashComponent', () => {
  let component: BrtransactionhashComponent;
  let fixture: ComponentFixture<BrtransactionhashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrtransactionhashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrtransactionhashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
