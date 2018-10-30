import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BptransactionComponent } from './bptransaction.component';

describe('BptransactionComponent', () => {
  let component: BptransactionComponent;
  let fixture: ComponentFixture<BptransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BptransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BptransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
