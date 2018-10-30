import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BptransactionhashComponent } from './bptransactionhash.component';

describe('BptransactionhashComponent', () => {
  let component: BptransactionhashComponent;
  let fixture: ComponentFixture<BptransactionhashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BptransactionhashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BptransactionhashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
