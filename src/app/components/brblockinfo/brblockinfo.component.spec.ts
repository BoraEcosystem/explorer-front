import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrblockinfoComponent } from './brblockinfo.component';

describe('BrblockinfoComponent', () => {
  let component: BrblockinfoComponent;
  let fixture: ComponentFixture<BrblockinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrblockinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrblockinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
